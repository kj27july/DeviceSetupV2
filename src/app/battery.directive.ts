import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector:'[batteryLevel]'
})
export class BatteryLevel{

    @Input() set batteryLevel(value){
        
        if (value>=75) {
            this.BatteryHigh = true;
            this.BatteryLow = false;
            this.BatteryAvg = false;
        }
        if (value<=25) {
            this.BatteryLow = true;
            this.BatteryHigh = false;
            this.BatteryAvg = false;
        }
        if (value>25 && value<75) {
            this.BatteryLow = false;
            this.BatteryHigh = false;
            this.BatteryAvg = true;
        }
        if (value==null) {
            this.BatteryHigh = false;
            this.BatteryLow = false;
            this.BatteryAvg = false;
        }
    }
    @HostBinding('class.battery-high') BatteryHigh; 
    @HostBinding('class.battery-low') BatteryLow; 
    @HostBinding('class.battery-avg') BatteryAvg;
    @HostBinding('class.is-hovering') mouseHovering = false;
    @HostListener('mouseenter') OnMouseEnter(){
        this.mouseHovering = true;
    }
    @HostListener('mouseleave') OnMouseExit(){
        this.mouseHovering = false;
    }

}