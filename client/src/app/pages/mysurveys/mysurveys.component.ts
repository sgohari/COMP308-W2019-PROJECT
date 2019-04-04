import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MySurveysComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authService: AuthService,
    ) {
    super(route);
   }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
