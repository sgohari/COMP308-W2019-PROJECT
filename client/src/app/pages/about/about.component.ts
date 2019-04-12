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

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SurveyService]
})
export class AboutComponent extends BasePageComponent implements OnInit {
  surveys: any[];
  survey: Survey = new Survey(null);
  mode = 'survey';
  surveyName: string;
  // property: SurveyProperty = {
  //   allowBack: true,
  //   allowReview: true,
  //   autoMove: false,  // if true, it will move to next question automatically when answered.
  //   duration: 60,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
  //   pageSize: 3,
  //   requiredAll: false,  // indicates if you must answer all the questions before submitting.
  //   richText: false,
  //   shuffleQuestions: false,
  //   shuffleOptions: false,
  //   showClock: false,
  //   showPager: true,
  //   theme: 'none'
  // };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  // timer: any = null;
  // startTime: Date;
  // endTime: Date;
  // ellapsedTime = '00:00';
  // duration = '';

  constructor(
    private surveyService: SurveyService,
    route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
    this.surveys = this.surveyService.getAll();
    this.surveyName = this.surveys[0].id;
    this.loadSurvey(this.surveyName);
  }

  loadSurvey(surveyName: string) {
    this.surveyService.get(surveyName).subscribe(res => {
      this.survey = new Survey(res);
      this.pager.count = this.survey.questions.length;
      // this.startTime = new Date();
      // this.timer = setInterval(() => { this.tick(); }, 1000);
      // this.duration = this.parseTime(this.property.duration);
    });
    this.mode = 'survey';
  }

  // tick() {
  //   const now = new Date();
  //   const diff = (now.getTime() - this.startTime.getTime()) / 1000;
  //   if (diff >= this.property.duration) {
  //     this.onSubmit();
  //   }
  //   this.ellapsedTime = this.parseTime(diff);
  // }

  // parseTime(totalSeconds: number) {
  //   let mins: string | number = Math.floor(totalSeconds / 60);
  //   let secs: string | number = Math.round(totalSeconds % 60);
  //   mins = (mins < 10 ? '0' : '') + mins;
  //   secs = (secs < 10 ? '0' : '') + secs;
  //   return `${mins}:${secs}`;
  // }

  get filteredQuestions() {
    return (this.survey.questions) ? this.survey.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, choice: Choice) {
      question.choices.forEach((c) => {
        if (c._id !== choice._id) {
          c.selected = false;
        }
      });

    // if (this.property.autoMove) {
    //   this.goTo(this.pager.index + 1);
    // }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'survey';
    }
  }

  // isAnswered(question: Question) {
  //   return question.choices.find(c => c.selected) ? 'Answered' : 'Not Answered';
  // }

  // isCorrect(question: Question) {
  //   return question.choices.every(c => c.selected === c.isAnswer) ? 'correct' : 'wrong';
  // };

  onSubmit() {
    const answers = [];
    this.survey.questions.forEach(c => answers.push({ surveyId: this.survey._id, questionId: c._id, answered: c.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.survey.questions);
    this.mode = 'result';
  }
}
