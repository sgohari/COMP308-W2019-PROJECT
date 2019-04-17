import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Questions } from 'src/app/models/questions';
import { Choices } from 'src/app/models/choices';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  title: string;
  survey: Survey;
  questions: Questions[];
  choices: Choices[];


  constructor(
    private activateRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyListService: SurveyListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activateRoute.snapshot.data.title;
    this.survey = new Survey();
    this.questions = new Array<Questions>();
    this.choices = new Array<Choices>();

    this.activateRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });
  }

  newQuestion(): void{
    this.questions.push(new Questions());
  }

  newChoice(): void {
    this.choices.push(new Choices());
  }

  onDetailsPageSubmit(): void {
    this.surveyListService.addSurvey(this.survey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/mysurveys/survey-list']);
      } else {
        this.flashMessage.show('Add Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/mysurveys/survey-list']);
      }
    });
  }
}
