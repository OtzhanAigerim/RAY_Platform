import { Component, OnInit } from '@angular/core';
import { IProfile } from '../types/profile.interface';

@Component({
  selector: 'mc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formatOne = (): string => `2h 30m`;
  profile: IProfile = {
    fio: 'Danelya Mukash',
    email: 'danelya.m@gmail.com',
    logo: './../../../../assets/profile.svg',
    procent: 75,
    course_taking: [
      {
        code: 'financial-literacy',
        name: 'Financial literacy',
        mentor_code: 'mentors',
        mentor_name: 'Margulan Seisembai',
        procent: 75,
        logo: './../../../../assets/course-taking.svg',
      },
    ],
    mentor_choose: [
      {
        logo: './../../../../assets/margulan.svg',
        name: 'Margulan Seisembai',
      },
    ],
    favourites: [
      {
        logo: './../../../../assets/margulan.svg',
        name: 'Margulan Seisembai',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {
    this.profile.email = localStorage.getItem('name') || 'danelya.m@gmail.com';
  }
}
