import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.route';
import { AppConfig } from './app.config';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { ForpasswordComponent } from './forpassword/forpassword.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForpasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [AppConfig,
              AuthGuard,
              AuthenticationService,
              UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
