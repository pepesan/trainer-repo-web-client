export class Trainer {
  _id: string;
  name: string;
  email: string;
  techSkills: string[];
  constructor(
    _id: string = '',
    name: string = '',
    email: string = '',
    techSkills: string[] = []
    ) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.techSkills = techSkills;
  }
}
