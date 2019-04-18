import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/models/survey';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {
  surveys: Survey[];

  constructor(
    route: ActivatedRoute,
    private surveyListService: SurveyListService,
    private flashMessage: FlashMessagesService,
    private router: Router) {
    super(route);
   }

  ngOnInit() {
    this.surveys = new Array<Survey>();

    this.displaySurveyList();
  }

  displaySurveyList(): void {
    this.surveyListService.getHomeList().subscribe(data => {
      this.surveys = data.surveyList;
    });
  }

}
