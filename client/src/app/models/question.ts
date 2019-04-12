import { Choice } from './choice';


export class Question {
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    choices: Choice[];
}
