import { TestBed } from '@angular/core/testing';

import { DeviceItemService } from './device-item.service';

describe('DeviceItemService', () => {
  let service: DeviceItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
