import { Action } from "./Components/interface";

export const SET_MAX_PRICE = 'SET_MAX_PRICE';
export const SET_MIN_PRICE = 'SET_MIN_PRICE';
export const SET_PARTICIPANTS_FILTER = 'SET_PARTICIPANTS_FILTER';

export const setMaxPrice = (maxValue: number): Action<string, number> => {
    return {
        type: SET_MAX_PRICE,
        payload: maxValue,
    };
};

export const setMinPrice = (minValue: number): Action<string, number> => {
    return {
        type: SET_MIN_PRICE,
        payload: minValue,
    };
};

export const setParticipants = (participants: number): Action<string, number> => {
    return {
        type: SET_PARTICIPANTS_FILTER,
        payload: participants,
    };
};