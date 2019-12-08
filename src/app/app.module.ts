import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './welcome/navbar/navbar.component';
import { CaroselleComponent } from './welcome/caroselle/caroselle.component';
import { HomeComponent } from './welcome/home/home.component';
import { CategorieHomeComponent } from './welcome/categorie-home/categorie-home.component';
import { FooterComponent } from './welcome/footer/footer.component';
import { ProduitComponent } from './categorie/produit/produit.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { CartComponent } from './panier/cart/cart.component';
import { CheckoutComponent } from './check/checkout/checkout.component';
import { ViewComponent } from './categorie/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    CaroselleComponent,

    HomeComponent,

    CategorieHomeComponent,

    FooterComponent,

    ProduitComponent,

    ContactUsComponent,

    CartComponent,

    CheckoutComponent,

    ViewComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
