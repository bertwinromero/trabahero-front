import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

import { TasksRoutingModule } from './tasks.routes';

// MODULES
import { UiModule } from './../ui/ui.module';
import { CardsModule } from './../cards/cards.module';


// COMPONENTS
import {
  TasksComponent,
  TaskTitleComponent,
  TaskBookComponent,
  TaskInterestComponent,
  TaskLocationComponent,
  TaskOptionsComponent,
  TaskExploreComponent,
  TaskListComponent,
  TaskUsersComponent,
  TaskDescriptionComponent,
  TaskSummaryComponent,
  TaskScheduleComponent
} from './index';


const angularModules = [CommonModule, RouterModule];
const featureModules = [UiModule, TasksRoutingModule, CardsModule];
const libModules = [DlDateTimeDateModule, DlDateTimePickerModule];

const moduleComponents = [
  TasksComponent,
  TaskTitleComponent,
  TaskBookComponent,
  TaskInterestComponent,
  TaskLocationComponent,
  TaskOptionsComponent,
  TaskExploreComponent,
  TaskListComponent,
  TaskUsersComponent,
  TaskDescriptionComponent,
  TaskSummaryComponent,
  TaskScheduleComponent
];

@NgModule({
  declarations: [...moduleComponents],
  imports: [
    ...angularModules,
    ...featureModules,
    ...libModules
  ],
  exports: [...moduleComponents],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TasksModule { }
