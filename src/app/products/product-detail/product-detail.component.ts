import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService} from '../../products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, DoCheck {
  selectedProduct: Product[];
  onEdit(){
    this.productsService.onEdit();
  }

  constructor( private productsService: ProductsService ) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.selectedProduct = this.productsService.selectedProduct;
  }


}
