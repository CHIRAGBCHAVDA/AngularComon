import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCCComponent } from './dropdown-cc.component';

describe('DropdownCCComponent', () => {
  let component: DropdownCCComponent;
  let fixture: ComponentFixture<DropdownCCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownCCComponent]
    });
    fixture = TestBed.createComponent(DropdownCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
