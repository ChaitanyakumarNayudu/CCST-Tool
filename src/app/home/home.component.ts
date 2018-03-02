import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  height;
    users: User[] = [];
    constructor() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
   this.height =  (window.screen.height)-72;
  }

  
}
