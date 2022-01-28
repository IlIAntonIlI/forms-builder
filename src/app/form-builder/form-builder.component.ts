import { Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  elements = [{element: 'input','key':0},{element:'textarea','key':1},{element:'button',key:2},{element:'check',key:3},{element:'select',key:4}];
  formElements:{'element':string, key:number}[]=[]; 
  counter:number = 5;
  drop(event: CdkDragDrop<{element:string,key:number}[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.previousContainer.id==='cdk-drop-list-0'){
        this.formElements.splice(event.currentIndex,0,{'element': event.previousContainer.data[event.previousIndex].element, 'key': this.counter++});
        // this.stylesArray.push([<ElementStyle>{},<elseParameters>{},<formControlClasses>{},this.counter-1]);
        return;
      }
      this.formElements.splice(event.previousIndex,1);
    }
  }
  
  // form validating(required fields)
}
