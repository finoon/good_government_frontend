import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRegionComponent } from './crud-region.component';

describe('CrudRegionComponent', () => {
  let component: CrudRegionComponent;
  let fixture: ComponentFixture<CrudRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
