/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MojangPlayerService } from './mojang-player.service';

describe('Service: MojangPlayer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MojangPlayerService]
    });
  });

  it('should ...', inject([MojangPlayerService], (service: MojangPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
