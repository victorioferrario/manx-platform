import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { LayoutHybridComponent} from './shared/layout/hybrid/layout-fabric-mat.component';
const routes: Routes = [
  { path: '', component: DashboardComponent}, 
  { path: 'hybrid', component: LayoutHybridComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }