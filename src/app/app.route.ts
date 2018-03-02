import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForpasswordComponent } from './forpassword/forpassword.component';
import { AuthGuard } from './guards/index';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ProjectsComponent } from './projects/projects.component';
import { SatisfactionFactorsComponent } from './satisfaction-factors/satisfaction-factors.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'login/pass', component: ForpasswordComponent },
    {path:'dashboard',component:HomeComponent,
        children: [
            {
                path:'',
                component: DashboardComponent
            },
            {path: 'clientlist', component: ClientlistComponent},
            {path: 'projects', component: ProjectsComponent},
            {path: 'satisafactionFactors', component: SatisfactionFactorsComponent},
            {path: 'createForm', component: CreateFeedbackComponent}
        ]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
