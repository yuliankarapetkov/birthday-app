import { TestBed, inject } from '@angular/core/testing';

import { FriendsService } from './friends.service';

describe('AuthsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsService]
    });
  });

  it('should be created', inject([FriendsService], (service: FriendsService) => {
    expect(service).toBeTruthy();
  }));
});
