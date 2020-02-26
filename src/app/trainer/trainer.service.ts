import { Injectable } from '@angular/core';
import {Trainer} from './trainer';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  listado: Trainer[] = [ new Trainer('Pepe')];
  url = 'http://localhost:3000/trainer';
  data: Observable<Trainer[]>;
  constructor(private http: HttpClient) { }

  findAll(): Observable<Trainer[]> {
    this.data = this.http.get<Observable<Trainer[]>>(this.url)
      .pipe(catchError(this.handleError('get', [])));
    return this.data;
  }
  private handleError(operation = 'operation', result?) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }

  save(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Observable<Trainer>>(this.url, trainer)
      .pipe(catchError(this.handleError('post', new Trainer())));
  }
  getById(id: string = ''): Observable<Trainer> {
    return this.http.get<Observable<Trainer>>(this.url + '/' + id)
      .pipe(catchError(this.handleError('get', new Trainer())));
  }

  delete(id: string) {
    return this.http.delete<Observable<Trainer>>(this.url + '/' + id)
      .pipe(catchError(this.handleError('delete', new Trainer())));
  }
}
