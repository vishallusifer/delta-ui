import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  airportSelected: any = null;
  searchPerformed: boolean = false;
  airports: any = [];
  flights: any = [];



  constructor(private httpClient: HttpClient, private apiConnectService: ApiConnectService, private spinner: NgxSpinnerService) { 
    this.apiConnectService.getAirportDetails().subscribe((data: any) =>{
      this.airports = Array.from(new Set(data));
    });
  }

  ngOnInit(): void {
  }

  searchFlight() {
    this.searchPerformed = true;
    this.spinner.show();
    if(this.airportSelected.trim() !== ""){
      this.apiConnectService.searchFlight(this.airportSelected).subscribe( (data: any) => {
        this.flights = data;
        this.spinner.hide();
      });
    }
  }

  getAirportNames: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: any) => term.length < 2 ? []
        : this.airports.filter((v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

}
