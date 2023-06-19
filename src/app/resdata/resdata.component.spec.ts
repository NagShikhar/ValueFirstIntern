import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdataComponent } from './resdata.component';

describe('ResdataComponent', () => {
  let component: ResdataComponent;
  let fixture: ComponentFixture<ResdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResdataComponent]
    });
    fixture = TestBed.createComponent(ResdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
