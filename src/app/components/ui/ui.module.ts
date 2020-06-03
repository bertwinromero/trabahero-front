import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UiButtonOutlineComponent,
  UiCardHeaderComponent,
  UiCheckboxComponent } from './index';


const moduleComponents = [
  UiButtonOutlineComponent,
  UiCardHeaderComponent,
  UiCheckboxComponent
];

@NgModule({
  declarations: [...moduleComponents],
  imports: [
    CommonModule
  ],
  exports: [...moduleComponents],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UiModule { }
