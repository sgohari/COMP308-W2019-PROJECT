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

  //private endpoint = 'https://comp308-w2019-project.herokuapp.com/api/survey-list';
  private endpoint = 'https://comp308-w2019-project.herokuapp.com/api/survey-list/';
  private surveypoint = 'https://comp308-w2019-project.herokuapp.com/about/';
  private homepoint = 'https://comp308-w2019-project.herokuapp.com/home';
  //private endpoint = 'http://localhost:3000/api/survey-list/';
  //private surveypoint = 'http://localhost:3000/about/';
  //private homepoint = 'http://localhost:3000/home';

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
    return this.http.get<any>(this.surveypoint + survey._id, this.httpOptions);
  }

  public postAnswer(answer: Answers, survey: Survey): Observable<any> {
    return this.http.post<any>(this.surveypoint + survey._id, answer, this.httpOptions);
  }

  public addSurvey(survey: Survey): Observable<any> {
    return this.http.post<any>(this.endpoint + 'add', survey, this.httpOptions);
  }


  // For home page
  public getHomeList(): Observable<any> {
    return this.http.get<any>(this.homepoint, this.httpOptions);
  }
}
