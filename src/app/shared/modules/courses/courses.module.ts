import { NavBarModule } from 'src/app/shared/modules/navBar/navBar.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './components/courses/courses.component';
import { NgAntModule } from 'src/app/ng-zorro-antd.module';
import { LessonsComponent } from './components/lessons/lessons.component';
import { TestCourseComponent } from './components/testCourse/testCourse.component';
import { AnswersComponent } from './components/answers/answers.component';
import { VideosComponent } from './components/videos.component';

@NgModule({
  imports: [CommonModule, NavBarModule, RouterModule, NgAntModule, FormsModule],
  declarations: [
    CoursesComponent,
    LessonsComponent,
    TestCourseComponent,
    AnswersComponent,
    VideosComponent
  ],
  exports: [CoursesComponent],
})
export class CoursesModule {}
