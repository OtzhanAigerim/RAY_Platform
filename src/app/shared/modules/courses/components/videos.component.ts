import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'mc-videos',
  template: `
    <ng-container *ngIf="idProps === 1">
      <video controls style="width: 1081px;">
        <source src="../../../../../assets/video1m.mp4" type="video/mp4" />
      </video>
    </ng-container>
    <ng-container *ngIf="idProps === 2">
      <video controls style="width: 1081px;">
        <source src="../../../../../assets/video2m.mp4" type="video/mp4" />
      </video>
    </ng-container>
    <ng-container *ngIf="idProps === 3">
      <video controls style="width: 1081px;">
        <source src="../../../../../assets/video3m.mp4" type="video/mp4" />
      </video>
    </ng-container>
    <ng-container *ngIf="idProps === 4">
      <video controls style="width: 1081px;">
        <source src="../../../../../assets/video4m.mp4" type="video/mp4" />
      </video>
    </ng-container>
    <ng-container *ngIf="idProps === 5">
      <video controls style="width: 1081px;">
        <source src="../../../../../assets/video5m.mp4" type="video/mp4" />
      </video>
    </ng-container>
    <ng-container *ngIf="idProps === 6">
      <video controls style="width: 1081px;">
        <source src="../../../../../assets/video6m.mp4" type="video/mp4" />
      </video>
    </ng-container>
    <ng-container *ngIf="idProps === 7">
      <video controls style="width: 1081px;">
        <source src="../../../../../assets/video7m.mp4" type="video/mp4" />
      </video>
    </ng-container>
  `,
  styles: [''],
})
export class VideosComponent implements OnInit {
  @Input('id') idProps: number;

  constructor() {}

  ngOnInit(): void {}

}
