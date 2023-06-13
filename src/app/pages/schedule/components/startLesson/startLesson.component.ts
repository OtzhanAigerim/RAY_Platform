import { Component, OnInit } from '@angular/core';
import { IMeetings } from '../../types/meetings.interface';
import { Router } from '@angular/router';
import { IScheduleCourses } from 'src/app/shared/types/scheduleCourses.interface';

@Component({
  selector: 'mc-start-lesson',
  templateUrl: './startLesson.component.html',
  styleUrls: ['./startLesson.component.scss'],
})
export class StartLessonComponent implements OnInit {
  meetings: IMeetings[] = [
    {
      id: 1,
      month: 'September',
      shortmonth: 'Sep',
      day: 9,
      nameDay: 'Mon',
      fullDay: 'Monday',
      time: '10:00',
    },
    {
      id: 2,
      month: 'September',
      shortmonth: 'Sep',
      day: 11,
      nameDay: 'Wed',
      fullDay: 'Wednesday',
      time: '10:00',
    },
    {
      id: 3,
      month: 'September',
      shortmonth: 'Sep',
      day: 14,
      nameDay: 'Sun',
      fullDay: 'Sunday',
      time: '10:00',
    },
  ];
  courses: IScheduleCourses[] = [
    {
      id: 1,
      titleMentor: 'Fariza',
      img: 'fariza',
      nameCourse: 'Women’s secrets',
      meetings: 10,
    },
    {
      id: 2,
      titleMentor: 'Margulan',
      img: 'margulan',
      nameCourse: 'Financial literacy',
      meetings: 12,
    },
    {
      id: 3,
      titleMentor: 'Damelya',
      img: 'damelya',
      nameCourse: 'Perfect You',
      meetings: 9,
    },
  ];
  lesson: IMeetings;
  course: IScheduleCourses;
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.initializeValues();
  }

  initializeValues(): void {
    this.lesson = this.meetings.find(
      (meeting) => meeting.id === +this.router.url.split('/')[3]
    );
    this.course = this.courses.find((course) =>
      this.router.url.includes(course.img)
    );
    if (this.lesson && this.course) {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }

  startLesson(id: number, name: string): void {
    this.router.navigate(['/schedule/success/' + id + '/' + name]);
  }
}
