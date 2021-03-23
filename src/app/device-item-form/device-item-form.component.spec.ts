import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceItemFormComponent } from './device-item-form.component';

describe('DeviceItemFormComponent', () => {
  let component: DeviceItemFormComponent;
  let fixture: ComponentFixture<DeviceItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
