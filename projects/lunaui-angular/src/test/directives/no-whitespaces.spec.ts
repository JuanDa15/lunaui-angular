import { Component } from "@angular/core";
import { NoWhitespacesDirective } from "../../public-api";
import { ComponentFixture, TestBed } from "@angular/core/testing";

@Component({
  selector: 'test',
  imports: [NoWhitespacesDirective],
  standalone: true,
  template: `
    <input [lunaNoWhitespaces]="lunaNoWhitespaces" />
  `
})
class TestWrapperComponent {
  lunaNoWhitespaces = false;
}

describe('NoWhitespacesDirective - Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
  it('should not allow whitespaces', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'hello world';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('helloworld');
  })
  it('should allow whitespaces when lunaNoWhitespaces is false', () => {
    component.lunaNoWhitespaces = true;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'hello world';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('hello world');
  })
});
