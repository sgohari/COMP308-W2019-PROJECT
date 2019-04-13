export class Survey {
  // tslint:disable-next-line:variable-name
  _id: string;
  surveyName: string;
  surveyDescription: string;
  surveyQuestion: [{
    question: string,
    choice1: string,
    choice2: string,
    choice3: string,
    choice4: string
  }];
}
