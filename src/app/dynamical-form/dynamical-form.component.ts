import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DynamicalFormService } from '../dynamical-form.service';
import { CheckedElementStyles, ElementStyles } from '../reducers/element-styles/element-styles.reducer';
import { DragElement } from '../reducers/elements/elements.reducer';
import { selectElements } from '../reducers/elements/elements.selectors';
import { selectFormStyles } from '../reducers/form-styles/form-styles.selectors';

@Component({
  selector: 'app-dynamical-form',
  templateUrl: './dynamical-form.component.html',
  styleUrls: ['./dynamical-form.component.css'],
  providers: [ DynamicalFormService ]
})
export class DynamicalFormComponent implements OnInit {
  private elements$: Observable<DragElement[]> = this.store$.pipe(select(selectElements));
  private styles$: Observable<ElementStyles> = this.store$.pipe(select(selectFormStyles));
  public form!:FormGroup;
  public formElements!:DragElement[];
  public stylesForm:ElementStyles ={
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
  constructor(
    private store$: Store<CheckedElementStyles>,
    private dynamicalForm:DynamicalFormService
  ) {
  }

  ngOnInit(): void {
    this.styles$.subscribe((styles)=>{
      this.stylesForm=styles;
    })
    this.elements$.subscribe(elements=>{
      this.formElements=elements;
      this.form=this.dynamicalForm.toFormGroup(this.formElements);
    })
  }

  private message?:string;
  submitValues(){
    if(this.form.invalid){
      alert("Some information at the form is invalid!\nCheck if all required fields are filled with value!");
    } else {
      this.message='Information:\n'; 
      for (const key in this.form.value) {
        this.message = this.message+this.form.value[key]+'\n';
      }
      this.message= this.message + 'Succesfully sended!';
      alert(this.message);
    }
  }
}
