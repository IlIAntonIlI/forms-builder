import { Action } from "@ngrx/store";
import { CheckedElement } from "./checked-element.reducer";

export enum elementActionsType{
    check = '[ELEMENT] check'
}

export class elementCheckAction implements Action{
    readonly type = elementActionsType.check;
    constructor(public payload:CheckedElement){}
}

export type ElementActions = elementCheckAction;