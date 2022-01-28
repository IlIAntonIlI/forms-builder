import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CheckedElement, checkedElementNode, checkedElementReducer } from './checked-element/checked-element.reducer';
import { checkedElementStyleReducer, CheckedElementStyles, stylesNode } from './element-styles/element-styles.reducer';


export interface State {
  [stylesNode] : CheckedElementStyles 
}

export const reducers: ActionReducerMap<State,any> = {
  [stylesNode]:checkedElementStyleReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
