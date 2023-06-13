import { Component, OnInit } from '@angular/core';
import { IMeetings } from '../types/meetings.interface';
import { IScheduleCourses } from 'src/app/shared/types/scheduleCourses.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'mc-success',
  template: `
    <div class="success-div" *ngIf="lesson">
      <div class="tc" style="padding: 54px">
        <span
          nz-icon
          nzType="check-circle"
          [nzTheme]="'twotone'"
          [nzTwotoneColor]="'#0354AD'"
          style="font-size: 112px;"
        ></span>
        <h1
          style="font-size: 36px; font-weight: 600; margin-top: 10px; color: #006BB6"
        >
          Success!
        </h1>
        <p style="font-size: 18px; margin-top: 10px">
          Your 30-minute lesson at {{ lesson.time }} with
          {{ course.titleMentor }} on {{ lesson.fullDay }},
          {{ lesson.shortmonth }} {{ lesson.day }} has been scheduled
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .success-div {
        width: 529px;
        height: 323px;
        background: rgba(255, 198, 128, 0.26);
        border-radius: 30px;
        margin: 118px auto;
      }
    `,
  ],
})
export class SuccessComponent implements OnInit {
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
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.lesson = this.meetings.find(
      (meeting) => meeting.id === +this.router.url.split('/')[3]
    );
    this.course = this.courses.find((course) =>
      this.router.url.includes(course.img)
    );
    setTimeout(() => {
      this.router.navigate(['/schedule']);
    }, 5000);
  }
}
