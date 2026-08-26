import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { Products } from './products';

import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [Products],
  imports: [CommonModule, ProductsRoutingModule, NzCardModule],
})
export class ProductsModule {}
