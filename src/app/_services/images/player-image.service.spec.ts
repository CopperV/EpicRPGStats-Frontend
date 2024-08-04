/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayerImageService } from './player-image.service';

describe('Service: PlayerImage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerImageService]
    });
  });

  it('should ...', inject([PlayerImageService], (service: PlayerImageService) => {
    expect(service).toBeTruthy();
  }));
});
