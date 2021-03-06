import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { Table1Component } from './table1/table1.component';
import { BarComponent } from './bar/bar.component';

const routes: Routes = [
  {
    path:'',
    component: TableComponent
  },
  {
    path:'test',
    component: Table1Component
  },
  {
    path:'bar',
    component: BarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
