import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  TasksComponent,
  TaskBookComponent,
  TaskExploreComponent,
  TaskUsersComponent,
  TaskDescriptionComponent,
  TaskScheduleComponent } from './';

const ROUTES: Route[] = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: '',
        redirectTo: 'explore',
        pathMatch: 'full',
      },
      {
        path: 'explore',
        component: TaskExploreComponent,
      },
      {
        path: 'book',
        component: TaskBookComponent,
        children: [
          {
            path: 'description',
            component: TaskDescriptionComponent,
          },
          {
            path: 'heroes',
            component: TaskUsersComponent,
          },
          {
            path: 'schedule',
            component: TaskScheduleComponent,
          },
        ],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
