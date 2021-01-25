import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-icon',
  template: `
    <nz-alert nzType="success" nzMessage="Success Tips" nzShowIcon></nz-alert>
    <nz-alert nzType="info" nzMessage="Informational Notes" nzShowIcon></nz-alert>
    <nz-alert nzType="warning" nzMessage="Warning" nzShowIcon></nz-alert>
    <nz-alert nzType="error" nzMessage="Error" nzShowIcon></nz-alert>`,
  styles: [
    `
      nz-alert {
        margin-bottom: 16px;
      }
    `
  ]
})
export class NzDemoAlertIconComponent {}
