import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardUserComponent } from './';

const moduleComponents = [CardUserComponent];

const angularModules = [CommonModule, RouterModule];

@NgModule({
  declarations: [...moduleComponents],
  imports: [
    ...angularModules
  ],
  exports: [...moduleComponents],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CardsModule { }
