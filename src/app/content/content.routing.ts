import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent
  },
];

export const ContentRoutes = RouterModule.forChild(routes);
