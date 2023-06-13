import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAntModule } from 'src/app/ng-zorro-antd.module';

import { NavBarComponent } from 'src/app/shared/modules/navBar/components/navBar.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgAntModule, FormsModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavBarModule {}
