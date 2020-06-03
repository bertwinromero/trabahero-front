import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button-outline',
  templateUrl: './ui-button-outline.component.html',
  styleUrls: ['./ui-button-outline.component.scss']
})
export class UiButtonOutlineComponent {
  @Input()
  title: string;

  @Input()
  class: string;

}
