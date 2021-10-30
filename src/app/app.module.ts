import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IsPurshasedDirective } from './viewmodel/is-purshased.directive';
import { ProductCardDirective } from './directives/product-card.directive';
import { NationaIDPipe } from './pipes/nationa-id.pipe';
import { CreditCardFormatPipe } from './pipes/credit-card-format.pipe';
import { CartParentComponent } from './components/divided/cart-parent/cart-parent.component';
import { CartChildComponent } from './components/divided/cart-child/cart-child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { ProductIDComponent } from './components/product-id/product-id.component';
import { NewProductComponent } from './components/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    IsPurshasedDirective,
    ProductCardDirective,
    NationaIDPipe,
    CreditCardFormatPipe,
    CartParentComponent,
    CartChildComponent,
    NotFoundComponent,
    ContactComponent,
    InfoComponent,
    ProductIDComponent,
    NewProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
