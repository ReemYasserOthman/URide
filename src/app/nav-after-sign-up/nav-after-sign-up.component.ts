import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-after-sign-up',
  templateUrl: './nav-after-sign-up.component.html',
  styleUrls: ['./nav-after-sign-up.component.css']
})
export class NavAfterSignUpComponent implements OnInit {

  DropMenu = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.DropMenu = !this.DropMenu
  }

}
