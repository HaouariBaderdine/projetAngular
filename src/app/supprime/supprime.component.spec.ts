import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimeComponent } from './supprime.component';

describe('SupprimeComponent', () => {
  let component: SupprimeComponent;
  let fixture: ComponentFixture<SupprimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
