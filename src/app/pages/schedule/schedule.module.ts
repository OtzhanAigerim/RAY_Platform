import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from './components/schedule/schedule.component';
import { NgAntModule } from 'src/app/ng-zorro-antd.module';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { NavBarModule } from 'src/app/shared/modules/navBar/navBar.module';
import { StartLessonComponent } from './components/startLesson/startLesson.component';
import { SuccessComponent } from './components/success.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'meetings/:id', component: MeetingsComponent },
  { path: 'start-lesson/:id/:img', component: StartLessonComponent },
  { path: 'success/:id/:img', component: SuccessComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgAntModule,
    NavBarModule,
  ],
  declarations: [
    ScheduleComponent,
    MeetingsComponent,
    StartLessonComponent,
    SuccessComponent,
  ],
  exports: [],
})
export class ScheduleModule {}
