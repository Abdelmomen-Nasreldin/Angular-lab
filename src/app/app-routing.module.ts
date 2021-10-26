import { ProductIDComponent } from './components/product-id/product-id.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartParentComponent } from './components/divided/cart-parent/cart-parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/About', pathMatch: 'full' },
  { path: 'About', component: InfoComponent },
  { path: 'Contact us', component: ContactComponent },
  { path: 'Products', component: CartParentComponent },
  { path: 'Products/:id/:totalProducts', component: ProductIDComponent },
  {
    path: 'User',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
