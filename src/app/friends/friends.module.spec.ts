import { FriendsModule } from './friends.module';

describe('FriendsModule', () => {
  let birthdayModule: FriendsModule;

  beforeEach(() => {
    birthdayModule = new FriendsModule();
  });

  it('should create an instance', () => {
    expect(birthdayModule).toBeTruthy();
  });
});
