import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [Home],
  imports: [CommonModule, HomeRoutingModule, NzButtonModule],
})
export class HomeModule {}
