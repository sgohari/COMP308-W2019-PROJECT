import { Question } from './question';

export class Survey {
    // tslint:disable-next-line:variable-name
    _id: number;
    name: string;
    description: string;
    questions: Question[];

    constructor(data: any) {
        if (data) {
            this._id = data._id;
            this.name = data.name;
            this.description = data.description;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
