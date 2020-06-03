import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './../ui/ui.module';

import { SkillsChecklistComponent } from './';


const angularModules = [CommonModule, RouterModule];
const featureModules = [UiModule];

const moduleComponents = [SkillsChecklistComponent];


@NgModule({
  declarations: [
    ...moduleComponents
  ],
  imports: [
    ...angularModules,
    ...featureModules
  ],
  exports: [...moduleComponents],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SkillsModule { }
