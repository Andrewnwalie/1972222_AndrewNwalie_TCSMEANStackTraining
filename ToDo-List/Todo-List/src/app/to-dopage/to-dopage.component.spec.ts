import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDopageComponent } from './to-dopage.component';

describe('ToDopageComponent', () => {
  let component: ToDopageComponent;
  let fixture: ComponentFixture<ToDopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
