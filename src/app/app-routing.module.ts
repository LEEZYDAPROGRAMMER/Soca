import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{path:'about', component: AboutComponent},
{path:'products', component: ProductsComponent},{path:'registration', component: RegistrationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
