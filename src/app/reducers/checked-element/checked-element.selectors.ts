import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CheckedElement, checkedElementNode } from "./checked-element.reducer";

const selectCheckedElementFeauture = createFeatureSelector<CheckedElement>(checkedElementNode); 

export const selectCheckedElement = createSelector(
    selectCheckedElementFeauture,
    (state:CheckedElement):string => state.key
);