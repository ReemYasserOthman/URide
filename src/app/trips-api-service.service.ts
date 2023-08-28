import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ResponseSearchTrip } from './response-search-trip';
import { SearchTrip } from './search-trip';

@Injectable({
  providedIn: 'root'
})
export class TripsApiServiceService {
  selectesTrips : ResponseSearchTrip [] =[];
  constructor( private http : HttpClient , private auth : AuthService) { }

  getTrips( selectedTrips : SearchTrip ) : Observable<any>{
    return this.http.get(`https://localhost:44369/api/Journeys/Search?StartCity=${selectedTrips.startCityId}&DistinationCity=${selectedTrips.distinationCityId}`);
  }

  getArrayOfTripes(trips : ResponseSearchTrip [] ){
    this.selectesTrips = trips
  }

  getUserTrips():  Observable<any>{
    return this.http.get(`https://localhost:44369/api/Journeys/GetMyjourny?id=${this.auth.getToken()}`)

  }
 
  trip :ResponseSearchTrip 
  editTrip(trip :  ResponseSearchTrip){

   this.trip = trip
   console.log(this.trip);
   
  }
 
}
