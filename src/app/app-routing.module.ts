import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/pages/home/home-page/home-page.component';
import { WarehousePageComponent } from './modules/pages/warehouse/warehouse-page.component';


const routes: Routes = [
  {
    path: 'warehouse',
    component: WarehousePageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
