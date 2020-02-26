import { Component, OnInit } from '@angular/core';
import {Trainer} from '../trainer';
import {TrainerService} from '../trainer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {
  listado: Trainer[] = [];
  data: Observable<Trainer[]>;
  constructor(
    private trainerService: TrainerService,
    private route: ActivatedRoute,
    private router: Router) {
    this.listado = this.trainerService.listado;
    this.getData();
  }
  getData() {
    this.data = this.trainerService.findAll();
    this.data.subscribe(data => {
      this.listado = data;
      console.log(this.listado);
    });
  }
  ngOnInit(): void {
  }
  goToAddForm() {
    this.router.navigate(['add-trainer']);
  }

}
