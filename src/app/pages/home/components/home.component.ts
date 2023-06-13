import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ICourse } from 'src/app/pages/home/types/course.interface';

@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  courses: ICourse[] = [
    {
      title: 'Perfect You',
      autor: 'By Damelya',
      image: './../../../../assets/courses-1.svg',
      link: 'perfect-you',
      rating_1: '20+ MCQ’s',
      rating_2: '25+ Q&A',
    },
    {
      title: 'Women’s Secret',
      autor: 'By Fariza',
      image: './../../../../assets/courses-2.svg',
      link: 'women-secret',
      rating_1: '20+ MCQ’s',
      rating_2: '25+ Q&A',
    },
    {
      title: 'Financial Literacy',
      autor: 'By Margulan',
      image: './../../../../assets/courses-3.svg',
      link: 'financial-literacy',
      rating_1: '20+ MCQ’s',
      rating_2: '25+ Q&A',
    },
  ];
  loading: boolean = false;
  searchRoute: Subscription;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);

    this.initializeLisners();
  }

  ngOnDestroy(): void {
    this.searchRoute.unsubscribe();
  }

  initializeLisners(): void {
    this.searchRoute = this.activateRoute.queryParams.subscribe((params) => {
      console.log(params);

      if (params['search']) {
        this.courses = this.courses.filter((course) =>
          course.title.toLowerCase().includes(params['search'].toLowerCase())
        );
      }
    });
  }
}
