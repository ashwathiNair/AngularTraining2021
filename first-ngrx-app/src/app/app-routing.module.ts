import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProductComponent} from './components/createproductcomponent/app.createproduct.component';
import {ProductsListComponent} from './components/productsListComponent/app.productslist.component';

const routes: Routes = [
  {path:'', component:ProductsListComponent},
  {path:'create', component:CreateProductComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
