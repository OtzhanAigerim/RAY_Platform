import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IScheduleCourses } from 'src/app/shared/types/scheduleCourses.interface';

@Component({
  selector: 'mc-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  scheduleCourses: IScheduleCourses[] = [
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
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  goToCourse(id: number): void {
    console.log(id);
    this.router.navigate(['/schedule/meetings/' + id]);
  }
}
