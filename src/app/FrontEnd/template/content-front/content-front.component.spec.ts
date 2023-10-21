import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFrontComponent } from './content-front.component';

describe('ContentFrontComponent', () => {
  let component: ContentFrontComponent;
  let fixture: ComponentFixture<ContentFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
