import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/pages/home/types/course.interface';

@Component({
  selector: 'mc-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  courses = [
    {
      title: 'Perfect You',
      autor: 'miss Damelya',
      image: './../../../../assets/damelya.svg',
      link: 'perfect-you',
    },
    {
      title: 'Women’s Secret',
      autor: 'miss Fariza',
      image: './../../../../assets/fariza.svg',
      link: 'women-secret',
    },
    {
      title: 'Financial Literacy',
      autor: 'mister Margulan',
      image: './../../../../assets/margulan.svg',
      link: 'financial-literacy',
    },
  ];
  financial_literacy = [
    {
      id: 1,
      text: 'The most valuable thing in this life is energy',
      description: `Money is energy, and your task is to clean your cash flows from all sides. If there is little money, if you live on a salary of 20 thousand rubles, this indicates that there is little energy. First of all, you need to pump your financial thinking, and at any financial thinking training you will be told about everything that I will tell you right now.
      Now to the point. Energy is taken away by debts - both yours and you. I understand that in our country it is difficult to live without loans, but I somehow live without them and quite successfully. When someone owes you, that person uses your energy. And when you owe someone, you use someone else's energy. No wonder there is a saying: "If you want to lose a friend, lend him money."
      `,
    },
    {
      id: 2,
      text: 'How to go from hiring to business?',
      description: `Entrepreneurial thinking is the ability to see an opportunity to make money wherever possible. To do this, a person needs to have certain qualities and abilities that can allow him to think more broadly and not drive himself into the framework. You can become an entrepreneur even when you are employed.`,
    },
    {
      id: 3,
      text: 'Never make these mistakes',
      description: `Often, aspiring entrepreneurs get too carried away with the idea of building a business, count on a quick and stunning success, forgetting about the most important thing — setting goals. Any commercial project should benefit people.  The goal is needed in order to determine the vectors of business movement and development, to help an entrepreneur follow in the right direction and achieve success. It is necessary to take into account the size of investments, the payback period of the project, possible expenses and unforeseen situations, as well as to calculate in advance the costs of salaries and bonuses of employees.
      `,
    },
    {
      id: 4,
      text: 'How to succeed?',
      description: `The main secret of success is to discover new opportunities in yourself, and work is one of the spheres of life where you can realize these opportunities. Trainings and seminars of the portal "Simple Business" are aimed at self-development, improving personal efficiency, as well as discovering new facets and opportunities in yourself.`,
    },
    {
      id: 5,
      text: 'How to find your business?',
      description: `To find successful business concepts, look through the business media: for example, RBC, Kommersant, Forbes, Bloomberg, Harvard Business Review and Inc often talk about trends. Study the ratings of companies with the maximum turnover growth. Or go and see for yourself how the organization you like works.
      `,
    },
    {
      id: 6,
      text: 'How to close debts?',
      description: `To find successful business concepts, look through the business media: for example, RBC, Kommersant, Forbes, Bloomberg, Harvard Business Review and Inc often talk about trends. Study the ratings of companies with the maximum turnover growth. Or go and see for yourself how the organization you like works.
      `,
    },
    {
      id: 7,
      text: 'Who can not give money?',
      description: `People who do not want to lend money can be divided
      into three main groups: those who live "past money", chronic losers
      and "money maniacs". If you are respectful of your finances, pay
      attention to who you are giving your money to and whether you can get
      it back. The first group of people who should not be given money in debt are those who live "past money". In conversations and arguments, these people demonstrate their disdain for money at every opportunity.`,
    },
  ];
  course;
  lesson;
  loading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadingVoid();
    this.initializeValue(this.route.params['_value'].id);
  }

  initializeValue(id: number): void {
    this.course = this.courses.find(
      (course) => course.link == this.route.params['_value'].link
    );
    this.lesson = this.financial_literacy.find((lesson) => lesson.id == id);
    console.log(this.lesson);
  }
  loadingVoid(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  next(id: number): void {
    console.log(this.route.params['_value'].id);

    const currentId = +this.route.snapshot.params['id'];
    const newId = currentId + 1;
    this.router.navigate([
      `/courses/${this.route.params['_value'].link}/${newId}`,
    ]);
    this.loadingVoid();
    this.lesson = this.financial_literacy.find(
      (lesson) => lesson.id == this.lesson.id + 1
    );
    if (id === 7) {
      this.router.navigate([
        `/courses/${this.route.params['_value'].link}/7/test`,
      ]);
    }
  }
  back(id: number): void {
    if (id == 1) window.history.back();
    const currentId = +this.route.snapshot.params['id'];
    const newId = currentId - 1;
    this.router.navigate([
      `/courses/${this.route.params['_value'].link}/${newId}`,
    ]);
    this.loadingVoid();
    this.lesson = this.financial_literacy.find(
      (lesson) => lesson.id == this.lesson.id - 1
    );
  }
}
