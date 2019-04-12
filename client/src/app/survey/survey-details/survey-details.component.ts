import { Component, OnInit } from '@angular/core';
import { Survey, Question, Choice } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  title: string;
  survey: Survey;
  question: Question;
  choice: Choice;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.survey = new Survey();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    })
  }

  private getSurvey(survey: Survey): void {
    this.surveyService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
    })
  }

  onDetailsPageSubmit(): void {
    this.surveyService.addSurvey(this.survey).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/pages/home/']);
      } else {
        this.flashMessage.show('Add Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/pages/home/']);
      }
    });
  }

}
