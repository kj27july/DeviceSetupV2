import { Component, OnInit } from '@angular/core';
import { DeviceItemService } from '../device-item.service';

@Component({
  selector: 'app-device-item-list',
  templateUrl: './device-item-list.component.html',
  styleUrls: ['./device-item-list.component.scss']
})
export class DeviceItemListComponent implements OnInit {
  deviceItems;
  constructor(private deviceItemService: DeviceItemService) { }

  ngOnInit(): void {
    this.deviceItems = this.deviceItemService.get();
  }
  

  onDeviceItemDelete(deviceItem){
    this.deviceItemService.delete(deviceItem); 
  }

}
