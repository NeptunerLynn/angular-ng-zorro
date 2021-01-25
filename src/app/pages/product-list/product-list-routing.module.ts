import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:productId', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgZorroAntdModule],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
