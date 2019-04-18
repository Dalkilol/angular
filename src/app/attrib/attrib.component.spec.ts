import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribComponent } from './attrib.component';

describe('AttribComponent', () => {
  let component: AttribComponent;
  let fixture: ComponentFixture<AttribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
