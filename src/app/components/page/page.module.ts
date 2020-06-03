import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksModule } from '../tasks/tasks.module';

import { PageComponent, PageHeaderComponent } from './index';

// MODULES
const featureModules = [TasksModule];
const angularModules = [CommonModule, RouterModule];

// COMPONENTS
const moduleComponents = [PageComponent, PageHeaderComponent];


@NgModule({
  declarations: [...moduleComponents],
  imports: [
    ...angularModules,
    ...featureModules
  ],
  exports: [...moduleComponents],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PageModule { }
