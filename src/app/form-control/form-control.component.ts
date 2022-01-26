import { Component, Input, HostListener, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent{
  @Input() element!:string;
  @Input() selectableSection!:boolean;
  @Output() changeTemplateEmiter = new EventEmitter<TemplateRef<any>>();
  @Input() relatedForm!:string;

  @ViewChild('template', {static: false})
  template!: TemplateRef<any>;

  elementStyle = {
    'height': '',
    'width': '',
    'border-width': '',
    'border-color': '',
    'border-style': '',
    'border-radius': '',
    'font-size':'',
    'font-weight':'',
    'color':''
  }

  elseParameters = {
    'placeholder': '',
    'required':''
  }

  skipClick:boolean = true;
  styles = {
    'border-width': '1px',
    'border-color': 'transparent',
    'border-style': 'solid'
  }

  clickOnFormControl(event:any){
    if(!this.selectableSection) return
    this.styles['border-color'] = 'blue';
    this.skipClick = true;
    this.changeTemplateEmiter.emit(this.template);
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
