import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapDropPrimengComponent } from './drap-drop-primeng.component';

describe('DrapDropPrimengComponent', () => {
  let component: DrapDropPrimengComponent;
  let fixture: ComponentFixture<DrapDropPrimengComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrapDropPrimengComponent]
    });
    fixture = TestBed.createComponent(DrapDropPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
