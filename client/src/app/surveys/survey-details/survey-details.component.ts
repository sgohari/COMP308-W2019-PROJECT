import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  title: string;
  survey: Survey;


  constructor(
    private activateRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyListService: SurveyListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activateRoute.snapshot.data.title;
    this.survey = new Survey();

    this.activateRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });
  }

  onDetailsPageSubmit(): void {

    this.surveyListService.addSurvey(this.survey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
        this.router.navigate(['/mysurveys/survey-list']);
      } else {
        this.flashMessage.show('Add Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/mysurveys/survey-list']);
      }
    });
  }
}
