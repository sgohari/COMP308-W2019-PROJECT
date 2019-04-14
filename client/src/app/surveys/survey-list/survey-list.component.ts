import { Component, OnInit } from '@angular/core';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[];

  constructor(
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();

    this.displaySurveyList();
  }

  displaySurveyList(): void {
    this.surveyListService.getList().subscribe(data => {
      if (data.success) {
        this.surveys = data.surveyList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }
}
