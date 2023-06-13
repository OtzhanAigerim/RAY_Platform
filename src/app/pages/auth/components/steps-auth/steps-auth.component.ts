import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegisterField } from '../../types/registerField.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'mc-steps-auth',
  templateUrl: './steps-auth.component.html',
  styleUrls: ['./steps-auth.component.scss'],
})
export class StepsAuthComponent implements OnInit {
  // current: number = 0;
  // index: number = 1;
  percent = 20;
  nullRow: string = '';
  interArray: IRegisterField[] = [
    { name: 'Personal growth', checked: false, selected: false },
    { name: 'Relationships', checked: false, selected: false },
    { name: 'Financial literacy', checked: false, selected: false },
  ];
  problemsArray: IRegisterField[] = [
    { name: 'Internal anxiety, loss of self', checked: false, selected: false },
    { name: 'Doesn’t work with partners', checked: false, selected: false },
    {
      name: 'Lack of money, financial crisis, credits',
      checked: false,
      selected: false,
    },
  ];
  startArray: IRegisterField[] = [
    { name: 'Self love', checked: false, selected: false },
    { name: 'Relationship', checked: false, selected: false },
    { name: 'Financial literacy', checked: false, selected: false },
  ];
  // reportForm: FormGroup = this.fb.group({
  //   age: [null, [Validators.required]],
  //   name: [null, [Validators.required]],
  //   inter: [null, [Validators.required]],
  //   problem: [null, [Validators.required]],
  //   start: [null, [Validators.required]],
  // });
  age: number;
  name: string;
  inter: string;
  problems: string;
  start: string;
  // listSelecteditem: boolean = false;

  constructor(private router: Router, private message: NzMessageService) {}

  ngOnInit(): void {}

  increase(): void {
    const validationMap = {
      20: { field: 'age', message: 'Please enter your age' },
      40: { field: 'name', message: 'Please enter your name' },
      60: { field: 'inter', message: 'Please select your interest' },
      80: { field: 'problems', message: 'Please select your problem' },
      100: { field: 'start', message: 'Please select your start' },
    };

    const validationInfo = validationMap[this.percent];

    if (validationInfo && this[validationInfo.field] === undefined) {
      this.message.error(validationInfo.message);
      return;
    }

    this.percent += 20;

    if (this.percent > 100) {
      this.percent = 100;
      this.router.navigate(['/completed']);
    }
  }

  decline(): void {
    this.percent -= 20;
    if (this.percent < 20) {
      this.percent = 20;
      this.router.navigate(['/login/succ']);
    }
  }

  listSelect(e: IRegisterField, type: string): void {
    const arrayMap = {
      inter: this.interArray,
      problems: this.problemsArray,
      start: this.startArray,
    };

    const selectedArray = arrayMap[type];

    selectedArray.forEach((item) => {
      if (item.name !== e.name) {
        item.selected = false;
      }
    });
    e.selected = !e.selected;
    if (e.selected) {
      this[type] = e.name;
    }
  }
}
