import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveyName: any;

  constructor(private http: HttpClient) { }

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
