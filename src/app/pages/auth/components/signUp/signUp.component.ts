import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AuthService } from 'src/app/pages/auth/services/auth.service';
@Component({
  selector: 'mc-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent implements OnInit {
  passwordVisible: boolean = false;
  signUpForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    if (this.signUpForm.valid) {
      localStorage.setItem('name', this.signUpForm.value.email);
      this.router.navigate(['/login/succ']);
    } else {
      this.message.error('Please, fill the form correctly.');
    }
  }
}
