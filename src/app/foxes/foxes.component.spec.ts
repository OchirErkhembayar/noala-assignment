import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxesComponent } from './foxes.component';

describe('FoxesComponent', () => {
  let component: FoxesComponent;
  let fixture: ComponentFixture<FoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
