// Author: Tom Tsiliopoulos
//      Project Part 2 Modified by: Team Musketeer
//      Members: Zeyu Ma 300737060
//               Syed Nasir Gohary 300937424
//               Abubakir Myrzaly 300931945
//               Sushmita Nandalan 300923159
import { Component, OnInit, Input } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  @Input() surveyName: string;
  surveys: any[];
  private pathSource = new BehaviorSubject(window.location.pathname);
  currentPath = this.pathSource.asObservable();

  constructor(
    route: ActivatedRoute,
    private surveyService: SurveyService) {
    super(route);
   }

  ngOnInit() {
    this.surveys = this.surveyService.getAll();
  }
}
