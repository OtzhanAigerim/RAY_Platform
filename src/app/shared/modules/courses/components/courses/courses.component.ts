import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICourses } from 'src/app/shared/types/courses.interface';

@Component({
  selector: 'mc-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: ICourses[] = [
    {
      title: 'Perfect You',
      image: 'perfect-you.svg',
      logo: 'logo-1.svg',
      mentor: 'miss Damelya',
      description: `First of all, self-love is honesty to one's own experiences, events and
      difficulties. To love yourself is to look at yourself and your world
      objectively, to accept your behavior without illusions. It is important to
      know your negative character traits, to realize how they are inherent in
      every area of ​​life, and to make a choice in favor of a change for the
      better, manifestations of your heart with kindness and compassion.
      Self-love is truly manifested when a person knows how to honestly look at
      himself and realizes where there is space for spiritual work.. True
      self-love is a behavior based on the harmony of “give and take”. A person
      who takes care of himself knows how and wants to take care of others for
      free, sincerely. Such a person realizes that he is not the center of the
      world, and understands that for other people he can be a source of love,
      support and light.`,
      game: 'perfect-you',
    },
    {
      title: 'Women’s secrets',
      image: 'womens.jpg',
      logo: 'logo-2.svg',
      mentor: 'miss Fariza',
      description: `The Almighty created a special woman. A woman should not forget what
      qualities God endowed her with. We ourselves play an important role in building relationships.
      Signs that a relationship is cooling down are resentments. Unspoken grievances destroy the bond.
      Contempt. It's scary to sink to the level of disrespect for each other. What is love without respect? Many turn a
      blind eye to everything and live like neighbors. Lie. Show will and opinion more often, cultivate
      principles and live in accordance with them. A manifestation of self-dislike is, for example, the
      phrase “I don’t care, choose for yourself” to a partner’s question about where your date will take
      place. Or “for nothing” in response to gratitude. Learn to give up this thinking, start respecting your
      time and work and take an active position: what do you want now? What is your opinion? It is with the
      awareness of one's values ​​and character traits that self-love begins.`,
      game: 'women-secret',
    },
    {
      title: 'Financial Literacy',
      image: 'financial.svg',
      logo: 'logo-3.svg',
      mentor: 'mister Margulan',
      description: `Financial literacy can be developed in a  sense of feeling - from learning
      with the most important consultant to self- study attending seminars, lectures, reading
      books, communicating with people. Finally, by the way, very effective. Financial literacy is
      the knowledge of how to make smart decisions with money. This includes preparing a budget, knowing
      how much to save, deciding favorable loan terms, understanding impacts to credit, and distinguishing different
      vehicles used for retirement. As a high school student transitions to college, they may be faced with the task of
      deciding which school to attend and how to finance their education. This may including how much money they should be
      saving from their after-school job, how the terms of their loan will work, and what opportunity costs exist throughout
      their decision-making process.`,
      game: 'financial-literacy',
    },
  ];
  course: ICourses;
  women_secret = [
    {
      title: 'Conversations',
      checked: false,
    },
    {
      title: 'Lie',
      checked: false,
    },
    {
      title: 'Contempt',
      checked: false,
    },
    {
      title: 'Neighbors',
      checked: false,
    },
  ];
  financial_literacy = [
    {
      id: 1,
      text: 'The most valuable thing in this life is energy',
      btnVisible: false,
    },
    {
      id: 2,
      text: 'How to go from hiring to business?',
      btnVisible: false,
    },
    {
      id: 3,
      text: 'Never make these mistakes',
      btnVisible: false,
    },
    {
      id: 4,
      text: 'How to succeed?',
      btnVisible: false,
    },
    {
      id: 5,
      text: 'How to find your business?',
      btnVisible: false,
    },
    {
      id: 6,
      text: 'How to close debts?',
      btnVisible: false,
    },
    {
      id: 7,
      text: 'Who can not give money?',
      btnVisible: false,
    },
  ];

  putLike: boolean = false;
  perfectYou?: string;

  constructor(
    private route: ActivatedRoute,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializevalues();
  }

  initializevalues(): void {
    this.route.params.subscribe((params) => {
      console.log(params['link']);
      this.course = this.courses.find(
        (course) => course.game === params['link']
      );
    });
    if(this.course.game === 'financial-literacy') {
      this.putLike = true;
    }
    console.log(this.course);
  }

  checkBox(item): void {
    item.checked = !item.checked;
    console.log(item);
  }

  like(): void {
    this.putLike = !this.putLike;
  }

  continue(game: string): void {
    console.log(this.women_secret);
    if (game === 'perfect-you') {
      if (this.perfectYou?.length < 3 || this.perfectYou === undefined) {
        this.message.create('error', `Вы не ответили на вопрос`);
      } else {
        this.message.create('success', `Ваш ответ принят`);
        this.router.navigate(['/']);
      }
    } else if (game === 'women-secret') {
      this.message.create('success', `Ваш ответ принят`);
      this.router.navigate(['/']);
    } else {
      this.message.create('success', `Ваш ответ принят`);
      this.router.navigate(['/']);
    }
  }

  showButton(question) {
    question.btnVisible = true;
  }

  hideButton(question) {
    question.btnVisible = false;
  }

  startLesson(e): void {
    this.router.navigate(['courses/financial-literacy/', e]);
    console.log('asdasd');
  }

  back(): void {
    window.history.back();
  }
}
