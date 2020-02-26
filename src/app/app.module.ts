import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {TrainerModule} from './trainer/trainer.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TrainerListComponent} from './trainer/trainer-list/trainer-list.component';
import {TrainerDetailComponent} from './trainer/trainer-detail/trainer-detail.component';
import {TrainerAddComponent} from './trainer/trainer-add/trainer-add.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'trainers',
    component: TrainerListComponent,
    data: { title: 'Trainer List' }
  },
  {
    path: 'add-trainer',
    component: TrainerAddComponent,
    data: { title: 'Add Trainer' }
  },
  {
    path: 'trainers/:id',
    component: TrainerDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TrainerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
