import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.css']
})

export class SecondNavbarComponent implements OnInit {
  navbar_variable = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbar_variable = true
    }
    else{
      this.navbar_variable = false
    }
    
  }
  logOut(){
    localStorage.setItem('token','');
  }
}

