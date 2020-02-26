import { Component, OnInit } from '@angular/core';
import {TrainerService} from '../trainer.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Trainer} from '../trainer';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {
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

  vuelve() {
    this.router.navigate(['trainers']);
  }
}
