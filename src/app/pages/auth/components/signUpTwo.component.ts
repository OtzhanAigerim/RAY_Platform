import { Component } from '@angular/core';

@Component({
  selector: 'mc-sign-up-two',
  template: `
    <div class="main-div sign">
      <img class="logo sign-lo" src="./../../../assets/logo.svg" alt="" />
      <h1 class="title-sign">Sign up to RAY</h1>
      <p class="sub-title">Your profile is ready to use</p>
      <div style="margin: 20px 0 14px 0;">
        <button class="btn btn-primary">
          <a [routerLink]="['/steps']" class="ap"
            >Answer a few more questions</a
          >
        </button>
      </div>
      <div style="margin: 0 auto;">
        <button class="btn btn-white">
          <a [routerLink]="['/home']" class="aw">Skip for now</a>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .sign {
        width: 300px;
        margin: 0 auto;
        text-align: center;
      }
      .sign-lo {
        width: 250px;
        margin: auto;
        padding: 188px 0 33px 0;
      }
      .sub-title {
        font-weight: 200;
        font-size: 14px;
        line-height: 15px;
        color: #6b6b6b;
      }
      .btn {
        border-radius: 10px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        min-width: 280px;
        min-height: 42px;
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;
        cursor: pointer;
      }
      .btn-primary {
        background: #006bb6;
      }
      .btn-white {
        background: #ffffff;
      }
      .ap {
        color: #ffffff;
      }
      .aw {
        color: #006bb6;
      }
      .ap:hover {
        color: #c9daf0;
      }
      .aw:hover {
        color: #061089;
      }
    `,
  ],
})
export class SignUpTwoComponent {}
