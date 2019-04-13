// Author: Tom Tsiliopoulos
//      Project Part 2 Modified by: Team Musketeer
//      Members: Zeyu Ma 300737060
//               Syed Nasir Gohary 300937424
//               Abubakir Myrzaly 300931945
//               Sushmita Nandalan 300923159
import { Component, OnInit, Input } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
<<<<<<< HEAD


=======
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

<<<<<<< HEAD
  constructor( route: ActivatedRoute) {
=======

  constructor(
    route: ActivatedRoute,
    private surveyService: SurveyService) {
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd
    super(route);
   }

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  displaySurveyList(): void {
  }
>>>>>>> 159390066e5487160abad8bc9df345c003247dcd
}
