import { Choice } from './choice';


export class Question {
    // tslint:disable-next-line:variable-name
    _id: number;
    name: string;
    choices: Choice[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this._id = data._id;
        this.name = data.name;
        this.choices = [];
        data.choices.forEach(c => {
            this.choices.push(new Choice(c));
        });
    }
}
