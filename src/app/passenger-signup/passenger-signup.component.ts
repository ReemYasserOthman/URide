import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-signup',
  templateUrl: './passenger-signup.component.html',
  styleUrls: ['./passenger-signup.component.css']
})
export class PassengerSignupComponent implements OnInit {
  gender = "" ;

  constructor(private http: HttpClient , private router : Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null , Validators.required ),
      'lastName': new FormControl(null , Validators.required ),
      'userName': new FormControl(null , Validators.required ),
      'email': new FormControl(null , [Validators.required , Validators.email] ),
      'password':  new FormControl(null , [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,64}$')]),
      'phoneNumber':  new FormControl(null , [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{11}$') ]),
      'picture':  new FormControl(null , Validators.required),
      'gender':  new FormControl(null , Validators.required),
    });
  }
  signupForm = new FormGroup({});
   
 onAddNewPassenger(postData :{firstName: string; lastName: string;
   userName: string ; email: string; picture : string ; password: string ; phoneNumber:string ,
    gender: string} ){
    this.http.post('https://localhost:44369/api/Users/RegisterUser',postData).subscribe(
      responseData => {console.log(responseData)
        this.router.navigate(['/login']);
      },
      error => {console.log(error)},
      )

  }

 
  
  

}