import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgAntModule } from 'src/app/ng-zorro-antd.module';
import { NavBarModule } from 'src/app/shared/modules/navBar/navBar.module';
import { ProfileComponent } from 'src/app/pages/profile/components/profile.component';
import { MentorsModule } from 'src/app/shared/modules/mentors/mentors.module';
import { MentorsComponent } from 'src/app/shared/modules/mentors/components/mentors.component';
import { ProfileService } from './services/profile.service';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  {
    path: 'mentors',
    component: MentorsComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    NavBarModule,
    NgAntModule,
    RouterModule.forChild(routes),
    MentorsModule,
  ],
  exports: [],
  providers: [ProfileService],
})
export class ProfileModule {}
