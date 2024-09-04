import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaribuComponent } from './karibu.component';

describe('KaribuComponent', () => {
  let component: KaribuComponent;
  let fixture: ComponentFixture<KaribuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaribuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaribuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
