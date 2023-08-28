import { HttpClient } from '@angular/common/http';
import { Component, OnInit , EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ResponseSearchTrip } from '../response-search-trip';
import { SearchTrip } from '../search-trip';
import { TripsApiServiceService } from '../trips-api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  featureSelected: string = 'upcoming';
  // tripLink : string = 'upcoming';
  constructor(private http : HttpClient , private auth: AuthService , private _trip : TripsApiServiceService ) { }

  ngOnInit(): void {
    this.getTrips()
  }

  onSelect(feature : string){
    this.featureSelected =  feature;
    console.log(feature)
  }

  UserTrips : ResponseSearchTrip[] ;
  getTrips() {
    this._trip.getUserTrips().subscribe(
      res => {
        console.log(res);
        
        this.UserTrips = res;
        console.log(this.UserTrips);
      },
      err => console.log(err)
      
    )
  }
  // getTrips(){
  //   this.http.get<any>(`https://localhost:44369/api/Journeys/GetMyjourny?id=${this.auth.getToken}`).subscribe(
  //     res => {
  //       console.log(res);
        
  //       this.UserTrips = res
  //     },
  //     err => console.log(err)
      
  //   )
  // }

  editTrip(trip :  ResponseSearchTrip){
    console.log("trip");
    
    console.log(  trip);
    
    this._trip.editTrip(trip)
  }

}
