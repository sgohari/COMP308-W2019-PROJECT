// Author: Tom Tsiliopoulos
//      Project Part 2 Modified by: Team Musketeer
//      Members: Zeyu Ma 300737060
//               Syed Nasir Gohary 300937424
//               Abubakir Myrzaly 300931945
//               Sushmita Nandalan 300923159
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { Survey, Choice, Question } from 'src/app/models';
import { SurveyService } from 'src/app/services/survey.service';
import { Surveyjson } from 'src/app/models/surveyjson';
import { Questionjson } from 'src/app/models/questionjson';
import { Choicejson } from 'src/app/models/choicejson';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SurveyService]
})
export class AboutComponent extends BasePageComponent implements OnInit {

  surveysjson: any[];
  surveyjson: Surveyjson = new Surveyjson(null);
  surveys: Survey[];
  survey: Survey;
  mode = 'survey';
  surveyName: string;
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  constructor(
    private surveyService: SurveyService,
    route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
    // hard coded json survey
    this.surveysjson = this.surveyService.getAll();
    this.surveyName = this.surveysjson[0].id;
    this.loadSurvey(this.surveyName);


    //this.getSurvey(this.survey);
  }

  loadSurvey(surveyName: string) {
    this.surveyService.get(surveyName).subscribe(res => {
      this.surveyjson = new Surveyjson(res);
      this.pager.count = this.surveyjson.questions.length;
    });
    this.mode = 'survey';
  }

  private getSurvey(survey: Survey): void {
    this.surveyService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
    })
  }

  get filteredQuestions() {
    return (this.surveyjson.questions) ? this.surveyjson.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Questionjson, choice: Choicejson) {
      question.choices.forEach((c) => {
        if (c._id !== choice._id) {
          c.selected = false;
        }
      });
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'survey';
    }
  }

  onSubmit() {
    const answers = [];
    this.surveyjson.questions.forEach(c => answers.push({ surveyId: this.surveyjson._id, questionId: c._id}));
    this.mode = 'result';
  }
}
