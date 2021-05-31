import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDbComponent } from './show-db.component';

describe('ShowDbComponent', () => {
  let component: ShowDbComponent;
  let fixture: ComponentFixture<ShowDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
