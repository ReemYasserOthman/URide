import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {TokenModel } from '../login-model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  constructor(private _auth:AuthService , private router:Router) { }
  signInForm = new FormGroup({});

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null , [Validators.required , Validators.email]),
      'password':  new FormControl(null , [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,64}$')])
    });
  }

  
 

  loginUser(postData :{email:string ; password :string}){
    console.log(this.signInForm);
    
    this._auth.loginUser(postData)
    .subscribe(
      res => {
        this.router.navigate(['']);
        console.log(res);
        localStorage.setItem('token', res.id) 
      }, 
      err =>console.log(err)
      
    )
  }

  // signInForm : any 

}
