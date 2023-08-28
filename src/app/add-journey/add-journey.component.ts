import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { City } from '../city';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css']
})
export class AddJourneyComponent implements OnInit {

  cityData: City[] | undefined = [];
  show : boolean = false

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
    this.getData()
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
  addTrip(postData: {
    startCityId: number; distinationCityId: number; price: string;
    roleOfUser: string; leavingTime: string; returing: string; rules: string;
    comment: string; frequency: string; createdById: string}) 
    {
      this.http.post('https://localhost:44369/api/Journeys', postData).subscribe(
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

}
