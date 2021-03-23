import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from "@angular/forms";
import { BatteryLevel } from './battery.directive';
import { AppComponent } from './app.component';
import { DeviceItemFormComponent } from './device-item-form/device-item-form.component';
import { DeviceItemComponent } from './device-item/device-item.component';
import { DeviceItemListComponent } from './device-item-list/device-item-list.component';
import { lookupListToken, lookupLists } from './providers';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,   
    DeviceItemFormComponent, 
    DeviceItemComponent, 
    DeviceItemListComponent,
    BatteryLevel,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ {provide: lookupListToken,useValue: lookupLists} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
