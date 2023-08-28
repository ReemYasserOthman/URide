import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-captions',
  templateUrl: './captions.component.html',
  styleUrls: ['./captions.component.css']
})
export class CaptionsComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }
  id = this._auth.getToken();

}
