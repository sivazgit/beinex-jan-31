import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextVdoComponent } from './text-vdo.component';

describe('TextVdoComponent', () => {
  let component: TextVdoComponent;
  let fixture: ComponentFixture<TextVdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextVdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextVdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
