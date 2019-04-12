import { Question } from './question';

export class Survey {
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    description: string;
    questions: Question[];
    // questions: [{
    //   _id,
    //   qName: string,
    //   choices: [{
    //     _id,
    //     cName
    //   }]
    // }]

    // constructor(data: any) {
    //     if (data) {
    //         this.name = data.name;
    //         this.description = data.description;
    //         this.questions = [];
    //         data.questions.forEach(q => {
    //             this.questions.push(new Question(q));
    //         });
    //     }
    // }
}
