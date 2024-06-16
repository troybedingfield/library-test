import {
  ApplicationConfig,
  importProvidersFrom
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxTroyUiComponent } from 'ngx-troy-ui';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    NgxTroyUiComponent,
    importProvidersFrom([BrowserModule, BrowserAnimationsModule])
  ]
};
