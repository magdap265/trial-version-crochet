import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
// import { ReactiveFormsModule } 


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CommentsComponent } from './products/products-list/comments/comments.component';
import { ProductItemComponent } from './products/products-list/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ContactComponent } from './contact/contact.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { PatternsListComponent } from './patterns/patterns-list/patterns-list.component';
import { PatternsItemComponent } from './patterns/patterns-list/patterns-item/patterns-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    CommentsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductsComponent,
    PatternsComponent,
    ContactComponent,
    ProductEditComponent,
    PatternsListComponent,
    PatternsItemComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'product/:detail/:productId', component: ProductsComponent },
      { path: 'edit', component: ProductEditComponent },
      { path: 'patterns', component: PatternsComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
