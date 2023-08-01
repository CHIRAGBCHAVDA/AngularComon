import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-cc',
  templateUrl: './dropdown-cc.component.html',
  styleUrls: ['./dropdown-cc.component.css']
})
export class DropdownCCComponent {

  @Input() parentForm: any;
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() controlName: string = '';
  @Input() required: boolean = false;
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() optionsList: any[] = [];
  control:FormControl = new FormControl('');
  @Output() onSelect : EventEmitter<string | number> = new EventEmitter<string | number>();

  onSelectEvent(event : any){
    this.onSelect.emit(event);
  }
}
