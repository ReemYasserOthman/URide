import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { City } from '../city';
import { ResponseSearchTrip } from '../response-search-trip';
import { TripsApiServiceService } from '../trips-api-service.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})

export class EditTripComponent implements OnInit {

  cityData: City[] | undefined = [];
  show : boolean = false

  constructor(private http: HttpClient, private auth: AuthService, private router: Router , private _trip :TripsApiServiceService) {
    this.getData();
    this.getTrip()
  }



  getData() {
    let Url = "https://localhost:44369/api/Journeys/City";
    console.log("city: " + this.cityData);

    return this.http.get<any>(Url).subscribe(
      respose => {
        this.cityData = respose
      }
    )
  }
  token = this.auth.getToken()
  editTrip(postData: ResponseSearchTrip) 
    {
      this.http.put(`https://localhost:44369/api/Journeys/Update?id=${this.trip.id}`, postData).subscribe(
        responseData => {
          // this.router.navigate('booktrip');
          this.show = true;
          setTimeout(() => {
              document.getElementById('alert')?.classList.add('fade');

          }, 3000);
          console.log(responseData)
        },
        error => { console.log(error) },
      )
      console.log(postData)
  }

  ngOnInit(): void {
  }

  trip : ResponseSearchTrip ;

  getTrip(){
    this.trip = this._trip.trip
    console.log(this.trip);
    
  }
}

