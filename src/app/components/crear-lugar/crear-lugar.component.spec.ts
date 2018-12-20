import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLugarComponent } from './crear-lugar.component';

describe('CrearLugarComponent', () => {
  let component: CrearLugarComponent;
  let fixture: ComponentFixture<CrearLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
