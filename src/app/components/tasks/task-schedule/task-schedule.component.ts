import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-task-schedule',
  templateUrl: './task-schedule.component.html',
  styleUrls: ['./task-schedule.component.scss']
})
export class TaskScheduleComponent implements OnInit {
  selectedDate: string;
  constructor() { }

  ngOnInit() {
  }

  onCustomDateChange(event: {_value: Date}): void {
    this.selectedDate = moment(event._value).format('MMMM Do YYYY, h:mm:ss a');
  }

  onChangeSchedule(): void {
    this.selectedDate = null;
  }

}
