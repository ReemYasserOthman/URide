import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { TokenModel } from './login-model';
import { Observable } from 'rxjs';
import { SearchTrip } from './search-trip';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  cityData: City[] = [] ;
  trips : any = [] ;
  constructor(private http:HttpClient) { }
  getData(){
    let Url = "https://localhost:44369/api/Journeys/City";
    return this.http.get<any>(Url).subscribe(
      respose => {
        this.cityData = respose
      }
    )
  }

  getTrips(trips :object){
    let Url = "https://localhost:44369/api/Journeys/Search";
    return this.http.get(Url, trips).subscribe(
      response => {
        console.log(response);
      }
    )
  }
}
