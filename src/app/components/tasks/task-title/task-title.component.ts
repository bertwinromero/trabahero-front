import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss']
})
export class TaskTitleComponent {
  @Input()
  title: string;

  @Input()
  step: number;
}
