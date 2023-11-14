import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEtudiantComponent } from './index-etudiant.component';

describe('IndexEtudiantComponent', () => {
  let component: IndexEtudiantComponent;
  let fixture: ComponentFixture<IndexEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
