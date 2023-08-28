import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import { City } from '../city';
import { ResponseSearchTrip } from '../response-search-trip';
import { TripsApiServiceService } from '../trips-api-service.service';

import { Route, Router } from '@angular/router';
import { data } from 'jquery';
import { JourneyService } from '../journey.service';
import { SearchTrip } from '../search-trip';
@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.css']
})
export class BookTripComponent implements OnInit {
  
  selectedTrips : ResponseSearchTrip[]   ;
  token = this.auth.getToken();
  cityData: City[] | undefined = [];
  trips : ResponseSearchTrip[] = [];
  show : boolean = false

  constructor(private _selectedTrips  : TripsApiServiceService , private router : Router,
    private http: HttpClient , private auth : AuthService , private  _trip : TripsApiServiceService  ) {
    this.selectedTrips = this._selectedTrips.selectesTrips; 
    console.log(this.selectedTrips);
    this.getData()
   }

  ngOnInit(): void {
    
  }
  // chooseTrip(){
  //   this.http.get('https://localhost:44369/api/Users/RegisterUser').subscribe(
  //     responseData => {console.log(responseData)
  //     },
  //     error => {console.log(error)},
  //     )
  // }
  getData() {
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
        this.trips = res;
        this._trip.getArrayOfTripes(res)
        console.log(this.trips)
      },
      err => console.log(err)
      
    )
  }
  // 1
  ///api/Journeys/Updateuserjoinby
   httpOptions = {
    headers: new HttpHeaders({})
  }
  chooseTrip(tripId : string){
    console.log(this.auth.getToken());
    const token = this.auth.getToken();
     this.http.put(`https://localhost:44369/api/Journeys/Updateuserjoinby?id=${tripId}&&JounById=${token}` , null)
    .subscribe(
      {
        next : (res) => {
          console.log(res);
          this.show = true;
          setTimeout(() => {
              document.getElementById('alert')?.classList.add('fade');

          }, 3000);
        },
        error : (error : HttpErrorResponse) => {
          console.log(error)
        }
      }
      )
  }

  
  


}
