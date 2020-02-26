import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { TrainerAddComponent } from './trainer-add/trainer-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TrainerEditComponent } from './trainer-edit/trainer-edit.component';

@NgModule({
    declarations: [
      TrainerListComponent,
      TrainerDetailComponent,
      TrainerAddComponent,
      TrainerEditComponent],
  exports: [
    TrainerListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TrainerModule { }
