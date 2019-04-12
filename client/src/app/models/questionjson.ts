import { Choicejson } from './choicejson';

export class Questionjson {
  // tslint:disable-next-line:variable-name
  _id: number;
  name: string;
  choices: Choicejson[];

  constructor(data: any) {
      data = data || {};
      this._id = data._id;
      this.name = data.name;
      this.choices = [];
      data.choices.forEach(c => {
          this.choices.push(new Choicejson(c));
      });
  }
}
