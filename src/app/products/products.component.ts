import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService} from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, DoCheck {
  selectedProduct: Product[];
  editProduct: boolean;

  constructor( private productsService: ProductsService ) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.selectedProduct = this.productsService.selectedProduct;
    this.editProduct = this.productsService.editProduct;
  }
}
