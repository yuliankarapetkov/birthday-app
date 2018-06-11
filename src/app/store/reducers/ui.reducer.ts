import * as fromUi from '../actions/ui.action';

export interface UiState {
    header: any;
    sidenav: any;
}

export const initialState: UiState = {
    header: {},
    sidenav: {}
};

export function uiReducer(state = initialState, action: fromUi.UiAction): UiState {
    switch (action.type) {
        case fromUi.SET_HEADER: {
            return {
                ...state,
                header: action.payload
            };
        }

        case fromUi.SET_SIDENAV: {
            const user = action.payload;
            return {
                ...state,
                sidenav: action.payload
            };
        }
    }

    return state;
}

export const getHeader = (state: UiState) => state.header;
export const getSidenav = (state: UiState) => state.sidenav;
