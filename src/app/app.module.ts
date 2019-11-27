import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/pages/home/home-page/home-page.component';
import { HeaderComponent } from './core/header/header.component';
import { WarehousePageComponent } from './modules/pages/warehouse/warehouse-page.component';
import { StockItemListComponent } from './modules/warehouse/stock-item-list/stock-item-list.component';
import { RootStoreModule } from './core/state/root-store.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductGridComponent } from './modules/product-grid/product-grid.component';
import { ProductDisplayComponent } from './modules/product-grid/product-display/product-display.component';
import { MatIconModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartDisplayComponent } from './modules/cart/cart-display/cart-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    WarehousePageComponent,
    StockItemListComponent,
    ProductGridComponent,
    ProductDisplayComponent,
    CartDisplayComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
