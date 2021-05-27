import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CreateProductComponent } from './components/createproductcomponent/app.createproduct.component';
import { ProductsListComponent } from './components/productsListComponent/app.productslist.component';
import { MainComponent } from './components/app.main.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { mainReducer } from "./reducers/index";
import {  StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ProductEffect } from "./effects/app.product.effects";
import { environment } from "./../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CreateProductComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(mainReducer),
    EffectsModule.forRoot([ProductEffect]),
    StoreDevtoolsModule.instrument({
      name: 'first ngrx app',
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
