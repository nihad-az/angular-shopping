import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone: false,
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('Products component loaded');

    this.productService.getProducts().subscribe((response) => {
      console.log('API response received');

      this.products = response.products;

      console.log('Products assigned:', this.products.length);

      this.loading = false;

      console.log('Loading:', this.loading);
    });
  }
}
