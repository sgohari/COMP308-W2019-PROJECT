import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/models/survey';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Answers } from 'src/app/models/answers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BasePageComponent implements OnInit {

  title: string;
  survey: Survey;
  answer: Answers;

  constructor(
    route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyListService: SurveyListService,
    private router: Router) {
    super(route);
  }

  ngOnInit() {
    this.survey = new Survey();
    this.answer = new Answers();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    })

    this.getSingleSurvey(this.survey);
  }

  private getSingleSurvey(survey: Survey): void {
    this.surveyListService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
    });
  }

  onAboutPageSubmit(): void {
    this.surveyListService.postAnswer(this.answer, this.survey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/home']);
      } else {
        this.flashMessage.show('Take Survey Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/home']);
      }
    })
  }

}
