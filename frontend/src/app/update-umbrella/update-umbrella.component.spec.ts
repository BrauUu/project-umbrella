import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUmbrellaComponent } from './update-umbrella.component';

describe('UpdateUmbrellaComponent', () => {
  let component: UpdateUmbrellaComponent;
  let fixture: ComponentFixture<UpdateUmbrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUmbrellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUmbrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
