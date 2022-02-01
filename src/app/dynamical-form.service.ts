import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicalFormService {
  constructor() { }

  toFormGroup(elements:{element:string,key:number}[]){
    const group:any = {};
    elements.forEach(el=>{
      if(el.element!=='button')
        group[el.key]=new FormControl();
    })
    return new FormGroup(group);
  }
  
}
