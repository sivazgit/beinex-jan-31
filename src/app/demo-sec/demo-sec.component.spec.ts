import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSecComponent } from './demo-sec.component';

describe('DemoSecComponent', () => {
  let component: DemoSecComponent;
  let fixture: ComponentFixture<DemoSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
