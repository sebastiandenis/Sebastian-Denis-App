import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamContentComponent } from './iam-content.component';

describe('IamContentComponent', () => {
  let component: IamContentComponent;
  let fixture: ComponentFixture<IamContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IamContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
