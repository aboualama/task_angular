import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';




const routes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'exam',
      component: ExamComponent
  },
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule ,RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
