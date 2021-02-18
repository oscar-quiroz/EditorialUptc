import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEditorialComponent } from './nav-editorial.component';

describe('NavEditorialComponent', () => {
  let component: NavEditorialComponent;
  let fixture: ComponentFixture<NavEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
