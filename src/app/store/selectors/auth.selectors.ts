import { createSelector } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getUser = createSelector(fromRoot.getAuthState, fromAuth.getUser);
export const getIsLoggedIn = createSelector(fromRoot.getAuthState, fromAuth.getIsLoggedIn);