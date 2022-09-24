import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContanterComponent } from './hero-contanter.component';

describe('HeroContanterComponent', () => {
  let component: HeroContanterComponent;
  let fixture: ComponentFixture<HeroContanterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroContanterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroContanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
