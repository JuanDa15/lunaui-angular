import { Component } from "@angular/core";
import { ToLowercaseDirective } from "../../public-api";
import { ComponentFixture, TestBed } from "@angular/core/testing";

@Component({
  selector: 'test',
  standalone: true,
  imports: [ToLowercaseDirective],
  template: `
    <input [lunaToLowercase]="toUppercase"/>
  `
})
class TestWrapperComponent {
  toUppercase = true;
}

describe('ToLowerCaseDirective - Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestWrapperComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should convert input to lowercase', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'TEST';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('test');
  });
  it('should not convert input to lowercase', () => {
    component.toUppercase = false;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'TEST';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('TEST');
  });
})
