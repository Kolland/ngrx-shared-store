import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent
  },
];

export const TeamsRoutes = RouterModule.forChild(routes);
