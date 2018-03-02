import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// material modules

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatSelectModule, MatCheckboxModule, MatNativeDateModule, MatDialogModule, MatStepperModule, MatListModule, MatFormFieldControl} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { AppComponent } from './app.component';
import { routing } from './app.route';
import { AppConfig } from './app.config';

import { AuthenticationService } from './services/authentication.service';
import {ProjectListService} from './services/projectsList.service'
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { ForpasswordComponent } from './forpassword/forpassword.component';
import { HomeComponent } from './home/home.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ProjectsComponent } from './projects/projects.component';
import { SatisfactionFactorsComponent } from './satisfaction-factors/satisfaction-factors.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForpasswordComponent,
    HomeComponent,
    ClientlistComponent,
    ProjectsComponent,
    SatisfactionFactorsComponent,
    CreateFeedbackComponent,
    DashboardComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDialogModule,
    MatStepperModule,
    MatListModule,
  ],
  providers: [AppConfig,
              AuthGuard,
              AuthenticationService,
              ProjectListService
             ],
  bootstrap: [AppComponent],
  entryComponents: [
    ProjectEditComponent
]
})
export class AppModule { }
