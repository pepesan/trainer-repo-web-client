import { Injectable } from '@angular/core';
import {Trainer} from './trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  listado: Trainer[] = [ new Trainer('Pepe')];
  constructor() { }
}
