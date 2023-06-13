import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarModule } from 'src/app/shared/modules/navBar/navBar.module';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NavBarModule],
  exports: [],
})
export class AdminModule {}
