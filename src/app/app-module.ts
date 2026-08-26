import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';

registerLocaleData(en);

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideNzI18n(en_US),
    provideNzDateFnsAdapter(),
  ],
  bootstrap: [App],
})
export class AppModule {}
