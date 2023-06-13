import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/components/home.component';
import { NgAntModule } from 'src/app/ng-zorro-antd.module';
import { NavBarModule } from 'src/app/shared/modules/navBar/navBar.module';
import { CoursesModule } from 'src/app/shared/modules/courses/courses.module';
import { CoursesComponent } from 'src/app/shared/modules/courses/components/courses/courses.component';
import { LessonsComponent } from 'src/app/shared/modules/courses/components/lessons/lessons.component';
import { TestCourseComponent } from 'src/app/shared/modules/courses/components/testCourse/testCourse.component';
import { AnswersComponent } from 'src/app/shared/modules/courses/components/answers/answers.component';
import { HomeService } from './services/home.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'home/search',
    component: HomeComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'courses/:link',
    component: CoursesComponent,
  },
  {
    path: 'courses/:link/:id',
    component: LessonsComponent,
  },
  {
    path: 'courses/:link/:id/test',
    component: TestCourseComponent,
  },
  {
    path: 'courses/:link/:id/answers',
    component: AnswersComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgAntModule,
    NavBarModule,
    CoursesModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
