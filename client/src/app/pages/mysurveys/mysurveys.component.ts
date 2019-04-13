
// Author: Tom Tsiliopoulos
//      Project Part 2 Modified by: Team Musketeer
//      Members: Zeyu Ma 300737060
//               Syed Nasir Gohary 300937424
//               Abubakir Myrzaly 300931945
//               Sushmita Nandalan 300923159
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';
import { SurveyQuestions } from 'src/app/models/survey-questions';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyQuestionsService } from 'src/app/services/survey-questions.service';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MySurveysComponent implements OnInit {
  title: string;
  survey: SurveyQuestions [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private flashmessage: FlashMessagesService,
    private serveyQuestionService: SurveyQuestionsService,
    ) {  }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;

    this.activatedRoute.params.subscribe(params => {
    });
  }
/*
  private getSurvey(survey: SurveyQuestions): void {
    this.serveyQuestionService.getSurvey(survey).subscribe(data =>{
      this.survey = data.survey;
    });
  }
*/
}
