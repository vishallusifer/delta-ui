import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as envm } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(private httpClient: HttpClient) { }

  public getAirportDetails(): Observable<any> {
    return this.httpClient.get<any>(`${envm.url}` + 'airportDetails');
  }

  public searchFlight(airportSelected: string): Observable<any> {
    return this.httpClient.get<any>(`${envm.url}` + 'searchFlight/?flight='+encodeURIComponent(airportSelected));
  }
}
