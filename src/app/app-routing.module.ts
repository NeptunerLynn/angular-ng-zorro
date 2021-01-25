import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component'
import { ShippingComponent } from './pages/shipping/shipping.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/product-list' },
  { path: 'product-list', loadChildren: () => import('./pages/product-list/product-list.module').then(m =>  m.ProductListModule) },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
