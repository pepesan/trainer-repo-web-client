import { Component, OnInit } from '@angular/core';
import {Trainer} from '../trainer';
import {TrainerService} from '../trainer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.css']
})
export class TrainerEditComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    skills: new FormControl(''),
  });
  trainer: Trainer  = new Trainer();
  id = '';
  constructor(private trainerService: TrainerService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe((data) => {
      this.id = data.id;
      this.trainerService.getById(this.id).subscribe(trainer => {
        this.trainer = trainer;
      });
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.trainer = new Trainer(this.profileForm.value.name, this.profileForm.value.email);
    console.log(this.trainer);
    /*
    const res = this.trainerService.save(this.trainer);
    res.subscribe((data) => {
      console.log('Navega a listado');
      this.router.navigate(['trainers']);
    });

     */
  }
  vuelve() {
    this.router.navigate(['trainers']);
  }

}
