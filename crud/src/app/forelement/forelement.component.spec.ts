import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForelementComponent } from './forelement.component';

describe('ForelementComponent', () => {
  let component: ForelementComponent;
  let fixture: ComponentFixture<ForelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
