import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsComponent } from './darts.component';

describe('DartsComponent', () => {
  let component: DartsComponent;
  let fixture: ComponentFixture<DartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
