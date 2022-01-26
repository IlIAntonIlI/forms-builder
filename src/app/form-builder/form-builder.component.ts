import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  CdkPortalOutlet
} from '@angular/cdk/portal';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  elements = ['input','textarea','button','check','select'];
  formElements:string[]=[];
  formStyle={
    'width':'100%',
    'height':'26em',
    'border-color': 'green',
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': '0'
  }

  formStylingOpen:boolean = false;
  elementStylingOpen:boolean = false;


  classesOpenClosePanel = {
    'opened-panel': this.formStylingOpen
  }

  classesOpenClosePanelElements = {
    'opened-panel': this.elementStylingOpen
  }

  @ViewChild('formStylingContainer', {read: ViewContainerRef, static: false})
  formStylingContainer!: ViewContainerRef;

  @ViewChild('formStylingContainer', {read: CdkPortalOutlet, static: false})
  formStylingContainerOutlet!: CdkPortalOutlet;

  @ViewChild('formStylingTemplate', {static: false})
  formStylingTemplate!: TemplateRef<any>;
  
  @ViewChild('elementStylingContainer', {read: ViewContainerRef, static: false})
  elementStylingContainer!: ViewContainerRef;

  @ViewChild('elementStylingContainer', {read: CdkPortalOutlet, static: false})
  elementStylingContainerOutlet!: CdkPortalOutlet;

  @ViewChild('empty', {static: false})
  emptyTemplate!: TemplateRef<any>;

  elementStylingTemplate?:TemplateRef<any>;

  getElementStylingTemplate(template:TemplateRef<any>){
    this.elementStylingTemplate = template;
    if(this.elementStylingOpen){
      this.elementStylingContainer.clear();
      this.elementStylingContainer.createEmbeddedView(this.elementStylingTemplate || this.emptyTemplate, {});
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.previousContainer.id==='cdk-drop-list-0'){
        this.formElements.splice(event.currentIndex,0,event.previousContainer.data[event.previousIndex]);
        return;
      }
      this.formElements.splice(event.previousIndex,1);
    }
  }
  
  changeVisibilityFormStyling(){
    if(this.formStylingOpen){
      this.formStylingContainer.clear();
      this.formStylingOpen=!this.formStylingOpen;
      this.classesOpenClosePanel['opened-panel'] = this.formStylingOpen;
      return;
    }
    this.formStylingOpen=!this.formStylingOpen;
    this.formStylingContainer.createEmbeddedView(this.formStylingTemplate, {});
    this.classesOpenClosePanel['opened-panel'] = this.formStylingOpen;
  }

  changeVisibilityElementStyling(){
    console.log('hello');
    if(this.elementStylingOpen){
      this.elementStylingContainer.clear();
      this.elementStylingOpen=!this.elementStylingOpen;
      this.classesOpenClosePanelElements['opened-panel'] = this.elementStylingOpen;
      return;
    }
    this.elementStylingOpen=!this.elementStylingOpen;
    this.elementStylingContainer.createEmbeddedView(this.elementStylingTemplate || this.emptyTemplate, {});
    this.classesOpenClosePanelElements['opened-panel'] = this.elementStylingOpen;
  }

}
