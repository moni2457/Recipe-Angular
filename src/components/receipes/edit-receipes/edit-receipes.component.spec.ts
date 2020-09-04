import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceipesComponent } from './edit-receipes.component';

describe('EditReceipesComponent', () => {
  let component: EditReceipesComponent;
  let fixture: ComponentFixture<EditReceipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReceipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
