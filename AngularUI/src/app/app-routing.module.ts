import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { customerComponent } from './Customer/customer.component';


const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path: 'customer', component: customerComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
