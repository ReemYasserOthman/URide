import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cartype } from '../cartype';
import { City } from '../city';


@Component({
  selector: 'app-driver-signup',
  templateUrl: './driver-signup.component.html',
  styleUrls: ['./driver-signup.component.css']
})
export class DriverSignupComponent implements OnInit {
   firstName = '';
   lastName = ''
   gender =""
   carType: Cartype[] | undefined = [];
   signupForm = new FormGroup({});

  constructor(private http:HttpClient , private router: Router) { 
    this.getData()
  }

  
  getData(){
    let Url = "https://localhost:44369/api/Journeys/Car";
    console.log("city: " + this.carType);
    
    return this.http.get<any>(Url).subscribe(
      respose => {
        this.carType = respose;
        console.log(respose);
        
      }
    )
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null , Validators.required ),
      'lastName': new FormControl(null , Validators.required ),
      'userName': new FormControl(null , Validators.required ),
      'email': new FormControl(null , [Validators.required , Validators.email] ),
      'password':  new FormControl(null , [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,64}$')]),
      'phoneNumber':  new FormControl(null , [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{11}$') ]),
      'licence':  new FormControl(null , [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{9}$') ]),
      'nationalId':  new FormControl(null , [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{14}$') ]),
      'carNumber':  new FormControl(null , [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{4}$') ]),
      'carModel':  new FormControl(null , [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{4}$') ]),
      'carType':  new FormControl(null , [Validators.required ]),
      'picture':  new FormControl(null , Validators.required),
      'gender':  new FormControl(null , Validators.required),
    });
    
  }
  onAddNewDriver(postData :{firstName: string; lastName: string;
    userName: string ; email: string; picture : string ; password: string ; phoneNumber:string ; gender: string
    driverLicence:string ; nationalId: string;carNumber:string;carModel:Int32List;carTypeId:string;
  } )
  
  {
     this.http.post('https://localhost:44369/api/Drivers/RegisterDriver',postData).subscribe(
       responseData => {
        this.router.navigate(['/login']);
        console.log(responseData);
      },
       error => {console.log(error)},
       )
 
   }
}
