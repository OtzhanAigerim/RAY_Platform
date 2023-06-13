import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from 'src/app/pages/auth/components/signIn/signIn.component';
import { NgAntModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/app/pages/auth/components/signUp/signUp.component';
import { SignUpTwoComponent } from 'src/app/pages/auth/components/signUpTwo.component';
import { StepsAuthComponent } from 'src/app/pages/auth/components/steps-auth/steps-auth.component';
import { CompletedComponent } from 'src/app/pages/auth/components/completed.component';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

const routes: Routes = [
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'login/succ',
    component: SignUpTwoComponent,
  },
  {
    path: 'steps',
    component: StepsAuthComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    NgAntModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignUpTwoComponent,
    StepsAuthComponent,
    CompletedComponent,
  ],
  exports: [],
  providers: [AuthService],
})
export class AuthModule {}
