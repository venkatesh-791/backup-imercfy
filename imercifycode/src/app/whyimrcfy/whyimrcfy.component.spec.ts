import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyimrcfyComponent } from './whyimrcfy.component';

describe('WhyimrcfyComponent', () => {
  let component: WhyimrcfyComponent;
  let fixture: ComponentFixture<WhyimrcfyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyimrcfyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyimrcfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
