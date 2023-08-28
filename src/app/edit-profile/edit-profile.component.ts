import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
form : FormGroup
  constructor(private _user : UserDataService , private http : HttpClient , private auth : AuthService) {
    this.getUserData()
   }

  ngOnInit(): void {
   this.form = new FormGroup({
    firstName : new FormControl(null),
    lastName : new FormControl(null),
    userName : new FormControl(null),
    phoneNumber : new FormControl(null),
    email : new FormControl(null)
   })
  }
  userData : User | any
  userUpdate(postData : User){
    console.log(postData);
    console.log(this.auth.getToken());
    
     this.http.put(`https://localhost:44369/api/Users/Update?id=${this.auth.getToken()}` , postData)
     .subscribe({
      next : (res) => {
        console.log(res)
      },
      error : (error : HttpErrorResponse) => {
        console.log(error);
      }
     })
   
  }
  getUserData(){
    this._user.getUserDate().subscribe(  
        res => {
          this.userData = res;
          this.form.setValue({
            firstName : this.userData.firstName,
            lastName : this.userData.lastName,
            userName : this.userData.userName,
            phoneNumber : this.userData.phoneNumber,
            email : this.userData.email
          })
          // console.log(this.userData);
          
        },
        err => console.log(err)
      
    )
  }

  updateDAta(postData : any){
  }

}
