import { createSelector } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as fromUi from '../reducers/ui.reducer';

export const getHeader = createSelector(fromRoot.getUiState, fromUi.getHeader);
export const getSidenav = createSelector(fromRoot.getUiState, fromUi.getSidenav);