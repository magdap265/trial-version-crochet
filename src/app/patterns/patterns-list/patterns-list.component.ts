import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-patterns-list',
  templateUrl: './patterns-list.component.html',
  styleUrls: ['./patterns-list.component.css']
})
export class PatternsListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.productsList;
  }

}
