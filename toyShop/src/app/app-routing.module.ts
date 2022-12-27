import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddressComponent } from './address/address.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
import { ThanksForReviewComponent } from './thanks-for-review/thanks-for-review.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile-details', component: AddressComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'shop', component: ShopComponent },
  {
    path: 'product-single/:id',
    component: ProductsingleComponent,
  },
  { path: 'thanks_for_Review', component: ThanksForReviewComponent },
 
  {
    path: 'cart',
    component: CartComponent,
  },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
