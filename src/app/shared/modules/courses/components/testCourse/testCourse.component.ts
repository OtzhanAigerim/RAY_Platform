import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'mc-test-course',
  templateUrl: './testCourse.component.html',
  styleUrls: ['./testCourse.component.scss'],
})
export class TestCourseComponent implements OnInit {
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
  question = [
    {
      id: 1,
      question: `Money energy of a bank card: to find out
      the money energy, you need to add up all the numbers.
      Then what happened, you need to add the figure again.
      What came out at the end is the energy of your card. For example:`,
      p1: `5+1+6+9+4+9+7+1+4+8+5+7+3+2+0=75`,
      p2: `7+5=12`,
      p3: `1+2=3`,
    },
    {
      id: 2,
      question: `Your lucky financial code. Now we will find out a successful
      financial code, for this you need to add numbers: date of birth, month, year. For example:`,
      p1: `27.10.2002`,
      p2: `2+7=9`,
      p3: `1+0=1`,
    },
    {
      id: 3,
      question: `The last thing to count is to calculate a successful personal year. To do this, you need
      to do: Add the current year to your date of birth. For example:`,
      p1: `2023=2+0+2+3=7`,
      p2: `27.10=27+10=37`,
      p3: `37+7=44=4+4=8`,
    },
  ];
  course;
  lesson;
  moneyEnergy: string;
  luckyFinancialCode: string;
  successfulPersonalYear: string;

  constructor(private message: NzMessageService, private router: Router) {}

  ngOnInit(): void {
    this.course = this.courses[2];
  }

  send(): void {
    if (
      this.moneyEnergy === undefined ||
      this.luckyFinancialCode === undefined ||
      this.successfulPersonalYear === undefined
    ) {
      this.message.error('Заполните все поля!');
      console.log(this.moneyEnergy);
    } else {
      this.message.success('Ваш результат успешно отправлен!');
      this.router.navigate(['/courses/' + this.course.link + '/7/answers']);
    }
  }
}
