import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Survey } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private user: User;
  private authToken: any = null;

  private endpoint = 'https://comp308-w2019-project.herokuapp.com/api/surveys';
  surveyName: any;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(
    private http: HttpClient
  ) {
    this.user = new User();
  }

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getSurvey(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + survey._id, this.httpOptions);
  }

  public addSurvey(survey: Survey): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', survey, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '/assets/data/sportssurvey.json', name: 'Sports Survey' },
      { id: '/assets/data/foodsurvey.json', name: 'Food Survey' },
    ];
  }


}
