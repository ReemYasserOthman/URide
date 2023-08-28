import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { data } from 'jquery';
import { City } from '../city';
import { JourneyService } from '../journey.service';
import { ResponseSearchTrip } from '../response-search-trip';
import { SearchTrip } from '../search-trip';
import { TripsApiServiceService } from '../trips-api-service.service';

@Component({
  selector: 'app-search-journey',
  templateUrl: './search-journey.component.html',
  styleUrls: ['./search-journey.component.css']
})
export class SearchJourneyComponent implements OnInit {
  cityData: City[] | undefined = [];
  trips : ResponseSearchTrip[] = [];
  
  constructor(private http : HttpClient , private _journey:JourneyService ,private router : Router, private _trip : TripsApiServiceService) {
    this.getData()
   }

  ngOnInit(): void {
  }
  getData(){
    let Url = "https://localhost:44369/api/Journeys/City";
    console.log("city: " + this.cityData);
    
    return this.http.get<any>(Url).subscribe(
      respose => {
        this.cityData = respose        
      }
    )
  }
  
  searchTrip(postData : SearchTrip){
    this._trip.getTrips(postData).subscribe(
      res => {
        this.router.navigate(['/booktrip']);
        this.trips = res;
        this._trip.getArrayOfTripes(res);
        
        console.log(this.trips)
      },
      err => console.log(err)
      
    )
  }

  



}
