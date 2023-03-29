import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanquiComponent } from './canqui.component';

describe('CanquiComponent', () => {
  let component: CanquiComponent;
  let fixture: ComponentFixture<CanquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanquiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
