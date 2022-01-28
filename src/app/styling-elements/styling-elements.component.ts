import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCheckedElement } from '../reducers/checked-element/checked-element.selectors';
import { stylesSetAction } from '../reducers/element-styles/element-styles.actions';
import { CheckedElementStyles, ElementStyles } from '../reducers/element-styles/element-styles.reducer';
import { selectElement, selectStylesCheckedElement } from '../reducers/element-styles/element-styles.selectors';

@Component({
  selector: 'app-styling-elements',
  templateUrl: './styling-elements.component.html',
  styleUrls: ['./styling-elements.component.css']
})
export class StylingElementsComponent {
  @Input() title:string='';
  public element:string='';
  public key:string ='';
  public element$: Observable<string> = this.store$.pipe(select(selectElement));
  // public stylesCheckedElement$: Observable<ElementStyles> = this.store$.pipe(select(selectStylesCheckedElement));
  // public elementKey$: Observable<string> = this.store$.pipe(select(selectCheckedElement));
  
  constructor(private store$: Store<CheckedElementStyles>) {
    // this.element$.subscribe( element=>{
    //   this.element=element;
    // })
   }
  
  public stylesElement:FormGroup = new FormGroup({
    'height': new FormControl(''),
    'width': new FormControl(''),
    'border-width': new FormControl(''),
    'border-color': new FormControl(''),
    'border-style': new FormControl(''),
    'border-radius': new FormControl(''),
    'font-size':new FormControl(''),
    'font-weight':new FormControl(''),
    'color':new FormControl(''),
    'required': new FormControl(''),
    'placeholder': new FormControl('')
  }); 

  // elementStyle:ElementStyle={
  //   'height': '',
  //   'width': '',
  //   'border-width': '',
  //   'border-color': '',
  //   'border-style': '',
  //   'border-radius': '',
  //   'font-size':'',
  //   'font-weight':'',
  //   'color':'',
  //   'required': '',
  //   'placeholder': ''
  // }

  // elseParameters={
  //   'placeholder': '',
  //   'required':''
  // }

  formControlClasses={
    'form-control':true,
    'required':false
  }

  passParameters(){
    // console.log(this.element,this.element$);


    // console.log(this.stylesElement);
  }

}
