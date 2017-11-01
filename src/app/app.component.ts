import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-circle-box></app-circle-box>
      <app-circle></app-circle>
      <app-tracking-data></app-tracking-data>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
