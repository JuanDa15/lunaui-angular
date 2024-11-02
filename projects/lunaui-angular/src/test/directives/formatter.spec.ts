import { Component } from "@angular/core";
import { FormatterDirective, LunaFormatTypes } from "../../public-api";
import { ComponentFixture, TestBed } from "@angular/core/testing";

@Component({
  selector: 'test',
  imports: [FormatterDirective],
  template: `
    <input type="text" [lunaFormatter]="formatter" [lunaFormatterDecimals]="0"/>
  `,
  standalone: true
})
class TestWrapperComponent {
  formatter: LunaFormatTypes | null = null
}
describe('FormatterDirective - Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
  it('should format the input value', () => {
    component.formatter = 'creditCard';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = '1234567890123456';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('1234 5678 9012 3456');
  });
  it('should not format the input value if formatter is null', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = '1234567890123456';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('1234567890123456');
  });
  it('should format to phone', () => {
    component.formatter = 'phone';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = '1234567890';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('123-456-7890');
  })
  it('should format to currency', () => {
    component.formatter = 'currency';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = '123456789';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('$123,456,789');
  })
});
