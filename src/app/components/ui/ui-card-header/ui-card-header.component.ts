import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-card-header',
  templateUrl: './ui-card-header.component.html',
  styleUrls: ['./ui-card-header.component.scss']
})
export class UiCardHeaderComponent {
  @Input()
  title: string;

  @Input()
  id: string;

  @Input()
  target: string;
}
