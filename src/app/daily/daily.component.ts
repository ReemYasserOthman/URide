import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }
  id = this._auth.getToken();

}
