import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgAntModule } from 'src/app/ng-zorro-antd.module';
import { NavBarModule } from 'src/app/shared/modules/navBar/navBar.module';
import { MentorsComponent } from './components/mentors.component';

@NgModule({
  imports: [CommonModule, NavBarModule, RouterModule, NgAntModule],
  declarations: [MentorsComponent],
  exports: [MentorsComponent],
})
export class MentorsModule {}
