import { Component } from '@angular/core';

@Component({
  selector: 'mc-sign-up-two',
  template: `
    <div class="main-div sign">
      <img class="logo sign-lo" src="./../../../assets/logo.svg" alt="" />
      <h1 class="title-sign">All are completed!</h1>
      <p class="sub-title">You are now fully ready.</p>
      <div style="margin: 37px 0 56px 0;">
        <button style="padding: 26px 0;" class="btn btn-primary">
          <a [routerLink]="['/profile']" class="ap">View courses</a>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .sign {
        width: 950px;
        margin: 0 auto;
        text-align: center;
      }
      .sign-lo {
        width: 200px;
        margin: auto;
        padding: 188px 0 33px 0;
      }
      .title-sign {
        font-weight: 700;
        font-size: 54px;
        line-height: 30px;
        color: #006bb6;
        margin-bottom: 45px;
      }
      .sub-title {
        font-weight: 200;
        font-size: 40px;
        line-height: 44px;
        color: #6b6b6b;
      }
      .btn {
        width: 100%;
        border-radius: 10px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        width: 417px;
        height: 78px;
        font-weight: 400;
        font-size: 30px;
        line-height: 33px;
      }
      .btn-primary {
        background: #006bb6;
      }

      .ap {
        color: #ffffff;
      }

      .ap:hover {
        color: #c9daf0;
      }
    `,
  ],
})
export class CompletedComponent {}
