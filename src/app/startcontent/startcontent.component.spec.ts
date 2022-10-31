import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcontentComponent } from './startcontent.component';

describe('StartcontentComponent', () => {
  let component: StartcontentComponent;
  let fixture: ComponentFixture<StartcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
