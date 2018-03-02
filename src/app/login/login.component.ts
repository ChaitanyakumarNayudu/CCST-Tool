import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validation =  false;
  returnUrl: string;
public credentials = {};
public serverCredentials = {};
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  passwordPattern = '^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$';
  loginForm = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    Password: new FormControl('', [Validators.pattern(this.passwordPattern)])
  });
  constructor( private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService) { }

  ngOnInit() {
    
     // reset login status
     this.authenticationService.logout();
     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login(value) {
    console.log(this.loginForm.status);

    if(this.loginForm.status == 'INVALID'){
      this.validation = true;
    this.credentials = this.loginForm.value;
    this.authenticationService.login(this.loginForm.value)
      .subscribe(data => {
       this.router.navigate(['/dashboard']); 
      },
                 error => {alert('an error occured');
                           this.validation = false;
                });
  }
}
}
