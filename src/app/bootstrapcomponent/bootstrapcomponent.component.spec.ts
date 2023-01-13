import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapcomponentComponent } from './bootstrapcomponent.component';

describe('BootstrapcomponentComponent', () => {
  let component: BootstrapcomponentComponent;
  let fixture: ComponentFixture<BootstrapcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
