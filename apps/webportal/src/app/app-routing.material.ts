import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { LayoutFiberComponent} from './shared/layout/fabric/layout-fabric.component';
import { LayoutMaterialComponent } from './shared/layout/material/layout-material.component';
import { LayoutHybridComponent} from './shared/layout/hybrid/layout-fabric-mat.component';
const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'fabric', component: LayoutFiberComponent},
  { path: 'material', component: LayoutMaterialComponent} ,
  { path: 'hybrid', component: LayoutHybridComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }