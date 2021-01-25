import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductAlertComponent } from './../product-alert/product-alert.component';
import { ProductDetailComponent } from './../product-detail/product-detail.component';


@NgModule({
  imports: [
    ProductListRoutingModule,
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent
  ]
})
export class ProductListModule { }
