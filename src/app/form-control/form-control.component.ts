import { Component, Input, HostListener, Output, EventEmitter} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';

import { elementCheckAction } from '../reducers/checked-element/checked-element.actions';
import { CheckedElement } from '../reducers/checked-element/checked-element.reducer';
import { selectCheckedElement } from '../reducers/checked-element/checked-element.selectors';
import { stylesSetAction } from '../reducers/element-styles/element-styles.actions';
import { CheckedElementStyles, ElementStyles } from '../reducers/element-styles/element-styles.reducer';
import { selectElement, selectStylesCheckedElement } from '../reducers/element-styles/element-styles.selectors';
import {isEqual} from "src/app/functions/equalsObject";

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent{
  @Input() element!:string;
  @Input() selectableSection!:boolean;
  @Output() changeSelectedInputEmitter = new EventEmitter<[string,number]>();
  @Input() key!:string;
  public elementKey$: Observable<string> = this.store$.pipe(select(selectCheckedElement));
  public element$: Observable<string> = this.store$.pipe(select(selectElement));
  public stylesCheckedElement$: Observable<ElementStyles> = this.store$.pipe(select(selectStylesCheckedElement));
  styleChanges?:Subscription;
  keyChanges?:Subscription;

  constructor(private store$: Store<CheckedElementStyles>){
  }

  elementStyle:ElementStyles={
    'height': '',
    'width': '',
    'border-width': '',
    'border-color': '',
    'border-style': '',
    'border-radius': '',
    'font-size':'',
    'font-weight':'',
    'color':'',
    'placeholder': '',
    'required':''
  }


  formControlClasses={
    'form-control':true,
    'required':false
  }
  

  skipClick:boolean = true;
  styles = {
    'border-width': '1px',
    'border-color': 'transparent',
    'border-style': 'solid'
  }

  clickOnFormControl(){
    if(!this.selectableSection) return
    this.styles['border-color'] = 'blue';
    this.skipClick = true;
    this.store$.dispatch(new stylesSetAction({styles:this.elementStyle,element:this.element,key:this.key}))
    this.store$.pipe(select(selectStylesCheckedElement)).subscribe((data)=>{console.log(data)});
    this.store$.pipe(select(selectCheckedElement)).subscribe((data)=>{console.log(data)});
  }

  @HostListener('window:click')
  clickOutOfForm(){
    if(this.skipClick){
      this.skipClick = false;
      return;
    } 
    this.styles['border-color'] = 'transparent';
  }

  sendInfo(){
    alert("Information succesfully sended =)")
  }
}
