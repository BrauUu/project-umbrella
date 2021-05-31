import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUmbrelasComponent } from './show-umbrelas.component';

describe('ShowUmbrelasComponent', () => {
  let component: ShowUmbrelasComponent;
  let fixture: ComponentFixture<ShowUmbrelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUmbrelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUmbrelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
