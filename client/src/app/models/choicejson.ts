export class Choicejson {
  // tslint:disable-next-line:variable-name
  _id: number;
  questionId: number;
  name: string;
  selected: boolean;

  constructor(data: any) {
      data = data || {};
      this._id = data._id;
      this.questionId = data.questionId;
      this.name = data.name;
  }
}
