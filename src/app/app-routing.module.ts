import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceItemListComponent } from './device-item-list/device-item-list.component';
import { DeviceItemFormComponent } from './device-item-form/device-item-form.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {                   
    path: "device",
    children: [
      { path: "", component: DeviceItemListComponent },
      { path: "", component: DeviceItemFormComponent, outlet: "secondary" }
    ]
  },
];
  


// @NgModule({
//   declarations: [ ],
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   ]
// })
// export class AppRoutingModule { }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }