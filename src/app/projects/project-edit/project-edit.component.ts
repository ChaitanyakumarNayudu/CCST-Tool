import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  validation =  false;
  returnUrl: string;
public credentials = {};
public serverCredentials = {};
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPattern = '^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$';
  loginForm = new FormGroup({
    Username: new FormControl('', ),
    Password: new FormControl('', )
  });
  constructor() { }

  ngOnInit() {
  }

}
