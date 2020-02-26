import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Trainer} from '../trainer';
import {TrainerService} from '../trainer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trainer-add',
  templateUrl: './trainer-add.component.html',
  styleUrls: ['./trainer-add.component.css']
})
export class TrainerAddComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    skills: new FormControl(''),
  });
  trainer: Trainer;

  constructor(
    private trainerService: TrainerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.trainer = new Trainer(this.profileForm.value.name, this.profileForm.value.email);
    console.log(this.trainer);
    const res = this.trainerService.save(this.trainer);
    res.subscribe((data) => {
      console.log('Navega a listado');
      this.router.navigate(['trainers']);
    });
  }

}
