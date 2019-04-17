import { Component, OnInit } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { Answers } from 'src/app/models/answers';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyListService } from 'src/app/services/survey-list.service';

@Component({
  selector: 'app-report-export',
  templateUrl: './report-export.component.html',
  styleUrls: ['./report-export.component.css']
})
export class ReportExportComponent implements OnInit {

  report: Answers;
  reports: Answers[];
  retrieveReport: Answers[];

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private surveyListService: SurveyListService
  ) { }

  csvReports = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Report :',
    useBom: true,
    noDownload: false,
    headers: ['_id', 'surveyName', 'question1', 'answer1', 'question2', 'answer2', 'question3',
    'answer3', 'question4', 'answer4', 'question5', 'answer5']
  };

  ngOnInit() {
    this.retrieveReport = [];
    this.reports = new Array<Answers>();
    this.report = new Answers();
    this.activateRoute.params.subscribe(params => {
      this.report._id = params.id;
    });
    this.exportReport(this.report);
  }

  public exportReport(report): void {
    this.surveyListService.getSpecificReport(report).subscribe(data => {
      if (data.success) {
        // data.answerList.array.forEach(element => {

        // });
        data.answerList.forEach(report => {
          this.retrieveReport.push({
            _id: report._id,
            surveyName: report.surveyName,
            question1: report.question1,
            answer1: report.answer1,
            question2: report.question2,
            answer2: report.answer2,
            question3: report.question3,
            answer3: report.answer3,
            question4: report.question4,
            answer4: report.answer4,
            question5: report.question5,
            answer5: report.answer5
          });
        });

        this.getReport(report);
        this.router.navigate(['/reports']);
      }
    });
  }

  public getReport(report) {
    // tslint:disable-next-line:no-unused-expression
    new AngularCsv(this.retrieveReport, 'Report: ' + this.report.surveyName, this.csvReports);
  }

}
