import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcardsComponent } from './navbarcards.component';

describe('NavbarcardsComponent', () => {
  let component: NavbarcardsComponent;
  let fixture: ComponentFixture<NavbarcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
