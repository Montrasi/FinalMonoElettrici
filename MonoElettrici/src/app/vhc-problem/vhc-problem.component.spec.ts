import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VhcProblemComponent } from './vhc-problem.component';

describe('VhcProblemComponent', () => {
  let component: VhcProblemComponent;
  let fixture: ComponentFixture<VhcProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VhcProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VhcProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
