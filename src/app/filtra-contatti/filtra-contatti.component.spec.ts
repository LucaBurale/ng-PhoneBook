import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltraContattiComponent } from './filtra-contatti.component';

describe('FiltraContattiComponent', () => {
  let component: FiltraContattiComponent;
  let fixture: ComponentFixture<FiltraContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltraContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltraContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
