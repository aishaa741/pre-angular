import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent2Component } from './app-component2.component';

describe('AppComponent2Component', () => {
  let component: AppComponent2Component;
  let fixture: ComponentFixture<AppComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
