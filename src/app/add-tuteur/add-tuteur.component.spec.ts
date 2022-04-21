import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTuteurComponent } from './add-tuteur.component';

describe('AddTuteurComponent', () => {
  let component: AddTuteurComponent;
  let fixture: ComponentFixture<AddTuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTuteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
