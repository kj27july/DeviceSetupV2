import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//
import { DeviceListingComponent } from './device-listing/device-listing.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
const routes: Routes = [
 
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'device',
    component:DeviceListingComponent,
    canActivate:[AuthService]
  }
//,
//   {
// path:'device/:id',
// component:DeviceListingComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
