import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsRoutes } from './teams.routing';
import { EffectsModule } from '@ngrx/effects';
import { TeamsEffects } from './teams.effects';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutes,
    EffectsModule.forFeature([TeamsEffects]),
  ],
  declarations: [TeamsComponent]
})
export class TeamsModule { }
