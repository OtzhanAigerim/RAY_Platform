import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  email: string = 'admin@gmail.com';
  title: string = 'admin';
  admin: boolean = true;

  courses: any[] = [
    {
      id: 1,
      name: 'Angular',
      lessons: [
        {
          id: 1,
          name: 'Angular 1',
          questions: 3,
        },
        {
          id: 2,
          name: 'Angular 2',
          questions: 5,
        },
        {
          id: 3,
          name: 'Angular 3',
          questions: 7,
        },
      ],
      selected: false,
    },
    {
      id: 2,
      name: 'React',
      lessons: [
        {
          id: 1,
          name: 'React 1',
          questions: 3,
        },
        {
          id: 2,
          name: 'React 2',
          questions: 5,
        },
        {
          id: 3,
          name: 'React 3',
          questions: 7,
        },
      ],
      selected: false,
    },
    {
      id: 3,
      name: 'Vue',
      lessons: [
        {
          id: 1,
          name: 'Vue 1',
          questions: 3,
        },
        {
          id: 2,
          name: 'Vue 2',
          questions: 5,
        },
        {
          id: 3,
          name: 'Vue 3',
          questions: 7,
        },
      ],
      selected: false,
    },
  ];
  selectedCourse: any = null;

  constructor() {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || 'admin@gmail.com';
  }




  selectCourse(course: any) {
    this.courses.forEach((c) => {
      if (c.id !== course.id) {
        c.selected = false;
      }
    });
    course.selected = !course.selected;
    this.selectedCourse = course;
  }



}
