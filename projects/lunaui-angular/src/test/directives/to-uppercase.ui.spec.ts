import { Component } from "@angular/core";
import { ToUppercaseDirective } from "../../public-api";
import { ComponentFixture, TestBed } from "@angular/core/testing";

@Component({
  selector: 'test',
  standalone: true,
  imports: [ToUppercaseDirective],
  template: `
    <input [lunaToUppercase]="toUppercase"/>
  `
})
class TestWrapperComponent {
  toUppercase = true;
}

describe('ToUppercaseDirective - Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestWrapperComponent]
    }).compileComponents()
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render correctly', () => {
    expect(component).toBeTruthy();
  })
  it('should convert input to uppercase', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'hello';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('HELLO');
  })
  it('should not convert input to uppercase', () => {
    component.toUppercase = false;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'hello';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('hello');
  })
});
