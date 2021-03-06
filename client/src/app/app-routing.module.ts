// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MySurveysComponent } from './pages/mysurveys/mysurveys.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';
import { ReportExportComponent } from './export/report-export/report-export.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'mysurveys', component: MySurveysComponent, data: {title: 'My Surveys'}},
  {path: 'reports', component: ReportsComponent, data: {title: 'Reports'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},

  // Surveys

  {path: 'mysurveys/survey-list', component: SurveyListComponent, data: {title: 'Survey List'}, canActivate: [AuthGuard]},
  {path: 'mysurveys/survey-list/add', component: SurveyDetailsComponent, data: {title: 'Add a Survey'}, canActivate: [AuthGuard]},

  {path: 'mysurveys/survey-list/:id', component: SurveyListComponent, data: {title: 'Survey Detail'}, canActivate: [AuthGuard]},
  {path: 'about/:id', component: AboutComponent, data: {title: 'Take Survey'}},

  {path: 'export/report-export', component: ReportExportComponent, data: {title: 'Report Export'}},
  {path: 'export/report-export/:id', component: ReportExportComponent, data: {title: 'Report Export Page'}},

  // Users

  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Register'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
