import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mc-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent implements OnInit {
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
  answers = [
    {
      id: 3,
      title: 'MISSION 3. FAIR GOVERNANCE',
      des: `The Number of Consciousness and the Number of Mission are closely interrelated and influence each other. And separately, they also talk about your features. The number of the mission is included in 33 years, but a person begins to feel its influence already a couple of years before the Mission is included. Starting from the age of 28-29, a person feels a transitional stage, new thoughts, insights, aspirations. All this is due to the connection of the mission number.`,
    },
    {
      id: 5,
      title: 'MISSION 5. MISSION OF STRUGGLE',
      des: `A person with such a mission constantly feels the urge to fight in everything. And through the struggle there is a loss of money. BUT with all this – a mission of great opportunities. People with this mission need to move away from the word "NO", because this word blocks the flow of opportunities. Only with the transfer of knowledge does dissatisfaction go away.
      `,
    },
    {
      id: 8,
      title: 'MISSION 8. THE MISSION OF HARD WORK AND CELIBACY ',
      des: ` A person with such a mission is married to work. There is no personal life. His phrase is "I'm resting at work." A person experiences a desire for the material world and its results. He is drawn to money and real estate. Very stubborn people. Why the Mission of celibacy. Yes, because a person is constantly at work.`,
    },
  ];
  course;
  answer;
  isVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.course = this.courses[2];
    this.answer = this.answers[0];
  }

  next(id: number): void {
    if (id === 7) {
      // this.router.navigate(['/']);
      this.showModal();
    }
    console.log(id);
    id === 3 ? (id = 0) : id === 5 ? (id = 1) : (id = 2);
    this.answer = this.answers[id];
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    window.location.href = 'http://localhost:4202/solar-system';
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
