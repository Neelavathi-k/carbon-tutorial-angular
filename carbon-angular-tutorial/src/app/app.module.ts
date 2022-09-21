import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { UIShellModule, HeaderModule, IconModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    HeaderModule,
    IconModule  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
