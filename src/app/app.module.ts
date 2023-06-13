import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MentorsModule } from 'src/app/shared/modules/mentors/mentors.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AuthModule } from 'src/app/pages/auth/auth.module';
import { WelcomeModule } from 'src/app/pages/welcome/welcome.module';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Interceptor } from 'src/app/shared/services/interceptor.service';
import { HomeModule } from 'src/app/pages/home/home.module';
import { ProfileModule } from 'src/app/pages/profile/profile.module';
import { ScheduleModule } from './pages/schedule/schedule.module';
import { NavBarModule } from './shared/modules/navBar/navBar.module';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    WelcomeModule,
    AuthModule,
    HomeModule,
    ProfileModule,
    MentorsModule,
    ScheduleModule,
    NavBarModule,
    AdminModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
