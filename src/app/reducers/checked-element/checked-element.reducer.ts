import {  ElementActions, elementActionsType } from "./checked-element.actions";

export const checkedElementNode = 'element';

export interface CheckedElement{
    key:string,
}

const initialState:CheckedElement = {
    key:' ',
}

export const checkedElementReducer = (state=initialState,action:ElementActions) => {
    switch (action.type){
        case elementActionsType.check:
            return {
                ...state,
                key:action.payload.key
            }
        default:
            return state;
    }
}