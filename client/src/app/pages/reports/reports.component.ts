import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Answers } from 'src/app/models/answers';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent extends BasePageComponent implements OnInit {
  answers: Answers[];

  constructor(
    route: ActivatedRoute,
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) {
    super(route);
  }

  ngOnInit() {
    this.answers = new Array<Answers>();

    this.displayAnswerList();
  }

  displayAnswerList(): void {
    this.surveyListService.getReportList().subscribe(data => {
      console.log(this.answers);
      this.answers = data.answerList;
    });
  }
}
