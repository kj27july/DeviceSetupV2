import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent implements OnInit {

  constructor() { }
  @Input() deviceItem;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  ngOnInit(): void {
  }
  
  onDelete(){
    console.log("CLICKED DELETE");
    this.delete.emit(this.deviceItem);
  }

}
