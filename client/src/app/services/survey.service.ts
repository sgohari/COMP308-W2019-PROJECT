import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveyName: any;

  constructor(
    private http: HttpClient
  ) { }

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
