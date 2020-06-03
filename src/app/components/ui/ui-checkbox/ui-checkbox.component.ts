import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-checkbox',
  templateUrl: './ui-checkbox.component.html',
  styleUrls: ['./ui-checkbox.component.scss']
})
export class UiCheckboxComponent {
  @Input()
  title: string;

  @Input()
  id: string;

}
