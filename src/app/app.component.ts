import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownItem } from './dropdown.interface';
import { StatusGroup } from './statusGroups.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table-Base';
  label = "Button Label";
  icon = "home";
  type = "fab";
  appFn(response : string | number){
    console.log(response);
    confirm("Hello World!");
  }

  FilterForm : FormGroup = new FormGroup({
    statusGroup : new FormControl(''),
  });

  StatusGroupList : IDropdownItem[] = [
    {value: 1, viewValue: StatusGroup.Active, selected: false},
    {value: 2, viewValue: StatusGroup.All, selected: false},
    {value: 3, viewValue: StatusGroup.Approved, selected: false},
    {value: 4, viewValue: StatusGroup.Inactive, selected: false},
    {value: 5, viewValue: StatusGroup.Pending, selected: false},
  ];

  onSelect(event : any){
    console.log(event);
    alert("Hello World!" +  event.value);
  }



placeholder: string = '';
controlName: string = '';
required: boolean = false;
multiple: boolean = false;
disabled: boolean = false;
optionsList: any[] = [];
}
