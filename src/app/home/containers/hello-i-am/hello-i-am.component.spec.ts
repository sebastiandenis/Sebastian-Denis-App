import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HelloIAmComponent } from "./hello-i-am.component";

describe("HelloIAmComponent", () => {
  let component: HelloIAmComponent;
  let fixture: ComponentFixture<HelloIAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloIAmComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloIAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
