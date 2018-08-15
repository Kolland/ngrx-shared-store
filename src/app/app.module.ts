import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainRoutes } from './main.routing';
import { StateModule } from './state/state.module';
import { TeamsModule } from './teams/teams.module';
import { ContentModule } from './content/content.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainRoutes,
    StateModule,
    TeamsModule,
    ContentModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
