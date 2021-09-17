import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynlabLibraryComponent } from './synlab-library.component';

describe('SynlabLibraryComponent', () => {
  let component: SynlabLibraryComponent;
  let fixture: ComponentFixture<SynlabLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynlabLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynlabLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
