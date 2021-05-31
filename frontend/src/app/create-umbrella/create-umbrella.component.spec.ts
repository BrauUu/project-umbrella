import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUmbrellaComponent } from './create-umbrella.component';

describe('CreateUmbrellaComponent', () => {
  let component: CreateUmbrellaComponent;
  let fixture: ComponentFixture<CreateUmbrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUmbrellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUmbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
