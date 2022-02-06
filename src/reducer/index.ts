import { SET_MAX_PRICE, SET_MIN_PRICE } from './../action';
import { SET_PARTICIPANTS_FILTER } from "../action";

export interface RootState {
    participants: number | null;
    priceRange: {
        minValue: number | null;
        maxValue: number | null;
    };
}

const initialState: RootState = {
    participants: null,
    priceRange: {
        minValue: null,
        maxValue: null,
    }, 
}

export const rootReducer = (
    state: RootState = initialState,
    action: {type: string; payload: any}
): RootState => {
    switch (action.type) {
        case SET_PARTICIPANTS_FILTER:
            return {...state, participants: action.payload};
        case SET_MAX_PRICE: 
            return {...state, priceRange: {...state.priceRange, maxValue: action.payload}};
        case SET_MIN_PRICE:
            return {...state, priceRange: {...state.priceRange, minValue: action.payload}};
        default:
            return state;
    }
}