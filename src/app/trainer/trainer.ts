export class Trainer {
  name: string;
  email: string;
  techSkills: string[];
  constructor(
    name: string = '',
    email: string = '',
    techSkills: string[] = []
    ) {
    this.name = name;
    this.email = email;
    this.techSkills = techSkills;
  }
}
