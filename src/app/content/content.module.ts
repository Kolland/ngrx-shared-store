import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutes } from './content.routing';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutes
  ],
  declarations: [ContentComponent]
})
export class ContentModule { }
