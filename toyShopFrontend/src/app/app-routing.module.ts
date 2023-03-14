import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
import { MyshopComponent } from './myshop/myshop.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'shop', component: ShopComponent },{path:'myshop',component:MyshopComponent},
  {
    path: 'product-single/:id',
    component: ProductsingleComponent,
  },
  
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: 'aboutUs', component: AboutusComponent },
  
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  { path: 'iamadmin', component: AdminLoginComponent },{
    path:'makemeadmin',component:CreateAdminComponent
  },
  { path: 'dashboard', component: DashboardComponent },
   { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
