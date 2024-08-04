/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayerBackendService } from './player-backend.service';

describe('Service: PlayerBackend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerBackendService]
    });
  });

  it('should ...', inject([PlayerBackendService], (service: PlayerBackendService) => {
    expect(service).toBeTruthy();
  }));
});
