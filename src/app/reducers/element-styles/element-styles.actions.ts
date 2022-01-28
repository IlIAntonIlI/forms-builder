import { Action } from "@ngrx/store";
import { ElementStyles } from "./element-styles.reducer";

export enum changeActionTypes{
    setStyle = '[STYLES] set'
}

export class stylesSetAction implements Action{
    readonly type = changeActionTypes.setStyle;
    constructor(public payload:{
        styles:ElementStyles,
        element:string,
        key:string
    }){}
}

export type changeActions = stylesSetAction;