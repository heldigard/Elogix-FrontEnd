import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditInfoComponent } from './audit-info.component';

describe('AuditInfoComponent', () => {
  let component: AuditInfoComponent;
  let fixture: ComponentFixture<AuditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
