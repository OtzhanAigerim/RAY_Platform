import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'mc-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss'],
})
export class SignInComponent implements OnInit {
  passwordVisible: boolean = false;
  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    if (this.signInForm.valid) {
      localStorage.setItem('name', this.signInForm.value.email);
      this.router.navigate(['/home']);
    } else {
      this.message.error('Please, fill the form correctly.');
    }
  }
}
