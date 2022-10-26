import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludaComponent } from './saluda.component';

describe('SaludaComponent', () => {
  let component: SaludaComponent;
  let fixture: ComponentFixture<SaludaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
