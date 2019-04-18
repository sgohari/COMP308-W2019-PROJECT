import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey';
import { Answers } from '../models/answers';

@Injectable({
  providedIn: 'root'
})
export class SurveyListService {
  private user: User;
  private authToken: any = null;

  // private endpoint = 'https://comp308-w2019-project.herokuapp.com/api/survey-list/';
  // private surveypoint = 'https://comp308-w2019-project.herokuapp.com/about/';
  // private homepoint = 'https://comp308-w2019-project.herokuapp.com/home';
  // private reportpoint = 'https://comp308-w2019-project.herokuapp.com/reports';
  // private exportpoint = 'https://comp308-w2019-project.herokuapp.com/api/report-export/';
  private endpoint = 'http://localhost:3000/api/survey-list/';
  private surveypoint = 'http://localhost:3000/about/';
  private homepoint = 'http://localhost:3000/home';
  private reportpoint = 'http://localhost:3000/reports';
  private exportpoint = 'http://localhost:3000/api/report-export/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  // For about page
  public getSurvey(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + survey._id, this.httpOptions);
  }

  public postAnswer(answer: Answers): Observable<any> {
    return this.http.post<any>(this.surveypoint + 'add', answer, this.httpOptions);
  }

  public addSurvey(survey: Survey): Observable<any> {
    return this.http.post<any>(this.endpoint + 'add', survey, this.httpOptions);
  }


  // For home page
  public getHomeList(): Observable<any> {
    return this.http.get<any>(this.homepoint, this.httpOptions);
  }

  // For reports page
  public getReportList(): Observable<any> {
    return this.http.get<any>(this.reportpoint, this.httpOptions);
  }

  // For exporting report
  public getSpecificReport(answer: Answers): Observable<any> {
    return this.http.get<any>(this.exportpoint + answer._id, this.httpOptions);
  }
}
