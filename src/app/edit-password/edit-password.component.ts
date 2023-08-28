import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  editPasswprd(postData: {email : string , currentPassword : string , newPassword : string ,  confirmNewPassword : string}){
    console.log(postData);
    
    this.http.post('https://localhost:44369/api/Users/ChangePassword' , postData).subscribe(
      res => {
      
        console.log(res);
       
      }, 
      err =>console.log(err)
      
    )
  }

}
