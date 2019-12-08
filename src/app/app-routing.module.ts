import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './welcome/home/home.component';
import { ProduitComponent } from './categorie/produit/produit.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { CartComponent } from './panier/cart/cart.component';
import { CheckoutComponent } from './check/checkout/checkout.component';
import { ViewComponent } from './categorie/view/view.component';
const routes: Routes = [
{path: '', component: HomeComponent, pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'category', component: ProduitComponent},
{path: 'contact', component: ContactUsComponent},
{path: 'cart', component: CartComponent},
{path: 'checkout', component: CheckoutComponent},
{path: 'view', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
