import { Component, OnInit } from '@angular/core';
import {Trainer} from '../trainer';
import {TrainerService} from '../trainer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {TrainerWid} from '../trainer_wid';

@Component({
  selector: 'app-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.css']
})
export class TrainerEditComponent implements OnInit {
  profileForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    skills: new FormControl(''),
  });
  trainer: TrainerWid  = new TrainerWid();
  id = '';
  constructor(private trainerService: TrainerService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe((data) => {
      this.id = data.id;
      this.trainerService.getById(this.id).subscribe(trainer => {
        this.trainer = trainer;
        console.log(trainer);
        console.log(this.profileForm);
        this.profileForm.get('_id').setValue(this.trainer._id);
        this.profileForm.controls._id.disable();
        this.profileForm.get('name').setValue(this.trainer.name);
        this.profileForm.get('email').setValue(this.trainer.email);
        this.profileForm.get('skills').setValue(this.trainer.techSkills);
      });
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    const trainer = new TrainerWid(this.profileForm.value._id, this.profileForm.value.name, this.profileForm.value.email);
    this.trainerService.getById(this.id).subscribe(t => {
      this.trainer = t;
      trainer._id = t._id;
      const res = this.trainerService.updateById(trainer._id, trainer);
      res.subscribe((data) => {
        console.log('Navega a listado');
        this.router.navigate(['trainers']);
      });
    });
  }
  vuelve() {
    this.router.navigate(['trainers']);
  }

}
