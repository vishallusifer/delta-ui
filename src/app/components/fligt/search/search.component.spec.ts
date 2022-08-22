import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { environment as envm } from '../../../../environments/environment';
import { SearchComponent } from './search.component';
import { ApiConnectService } from 'src/app/services/api-connect.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: ApiConnectService;
  let spy: any;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [ApiConnectService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(
      HttpTestingController,
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('airport list should not empty on component initilization', () => {
      let mockAirports = newFunction(httpMock);
      expect(component.airports).toEqual(mockAirports);

  });

  it('Flight Serarch should bring schedule', () => {
    let mockAirports = newFunction(httpMock);
    expect(component.airports).toEqual(mockAirports);
    let mockAriportSelected = "ORD";
    component.airportSelected = "ORD";
    let mockFlights = [{}];
    component.searchFlight();
    const req1 = httpMock.expectOne(`${envm.url}` + 'searchFlight/?flight='+encodeURIComponent(mockAriportSelected));
    expect(req1.request.method).toEqual('GET');
    req1.flush(mockFlights);
    httpMock.verify();
    expect(component.flights).toEqual(mockFlights);
  });

  
});

function newFunction(httpMock: HttpTestingController) {
  let mockAirports = ["ORD : Chicago"];
  const req = httpMock.expectOne(`${envm.url}` + 'airportDetails');
  expect(req.request.method).toEqual('GET');
  req.flush(mockAirports);
  httpMock.verify();
  return mockAirports;
}

