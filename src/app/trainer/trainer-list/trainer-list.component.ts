import { Component, OnInit } from '@angular/core';
import {Trainer} from '../trainer';
import {TrainerService} from '../trainer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {
  listado: Trainer[] = [];

  constructor(
    private trainerService: TrainerService,
    private route: ActivatedRoute,
    private router: Router) {
    this.listado = trainerService.listado;
  }
  ngOnInit(): void {
  }
  goToAddForm() {
    this.router.navigate(['add-trainer']);
  }

}
