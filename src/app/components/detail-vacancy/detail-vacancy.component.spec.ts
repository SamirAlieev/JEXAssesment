import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVacancyComponent } from './detail-vacancy.component';

describe('DetailVacancyComponent', () => {
  let component: DetailVacancyComponent;
  let fixture: ComponentFixture<DetailVacancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailVacancyComponent]
    });
    fixture = TestBed.createComponent(DetailVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
