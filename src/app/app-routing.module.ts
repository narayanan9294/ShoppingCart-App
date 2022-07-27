import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListproductsComponent } from './Products/listproducts/listproducts.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

const routes: Routes = [
  {path:'',component:ListproductsComponent},
  {path:'login',component:LoginComponent},
  {path:'viewcart', component:ViewcartComponent,canActivate:[AuthGuard]},
  {path: 'categories', redirectTo: '/',pathMatch: 'full'},
{path: "categories/:catid", component: ListproductsComponent},
{path:'addproducts', component:AddproductsComponent},
{path:'**',component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
