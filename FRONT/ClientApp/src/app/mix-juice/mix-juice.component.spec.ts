import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixJuiceComponent } from './mix-juice.component';

describe('MixJuiceComponent', () => {
  let component: MixJuiceComponent;
  let fixture: ComponentFixture<MixJuiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixJuiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
