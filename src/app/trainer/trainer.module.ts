import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { TrainerAddComponent } from './trainer-add/trainer-add.component';

@NgModule({
    declarations: [TrainerListComponent, TrainerDetailComponent, TrainerAddComponent],
  exports: [
    TrainerListComponent
  ],
    imports: [
        CommonModule
    ]
})
export class TrainerModule { }
