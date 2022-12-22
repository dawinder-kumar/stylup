import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearHistoryComponent } from './wear-history.component';

describe('WearHistoryComponent', () => {
  let component: WearHistoryComponent;
  let fixture: ComponentFixture<WearHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WearHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
