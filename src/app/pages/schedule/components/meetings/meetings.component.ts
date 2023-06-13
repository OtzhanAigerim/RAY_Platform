import { IScheduleCourses } from 'src/app/shared/types/scheduleCourses.interface';
import { IMeetings } from './../../types/meetings.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mc-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent implements OnInit {
  meetings: IMeetings[] = [
    {
      id: 1,
      month: 'September',
      shortmonth: 'Jan',
      day: 9,
      nameDay: 'Mon',
      fullDay: 'Monday',
      time: '10:00',
    },
    {
      id: 2,
      month: 'September',
      shortmonth: 'Feb',
      day: 11,
      nameDay: 'Wed',
      fullDay: 'Wednesday',
      time: '10:00',
    },
    {
      id: 3,
      month: 'September',
      shortmonth: 'Mar',
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
  course: IScheduleCourses;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.course = this.courses.find(
      (course) =>
        '/schedule/meetings/' + course.id === this.router.url.split('?')[0]
    );
  }

  startCourse(name: string, id: number): void {
    this.router.navigate(['/schedule/start-lesson/' + id + '/' + name]);
  }
}
