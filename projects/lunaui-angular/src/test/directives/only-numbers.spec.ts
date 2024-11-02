import { Component } from "@angular/core";
import { OnlyNumbersDirective } from "../../public-api";
import { ComponentFixture, TestBed } from "@angular/core/testing";

@Component({
  selector: 'test',
  standalone: true,
  imports: [OnlyNumbersDirective],
  template: `
    <input [lunaOnlyNumbers]="onlyNumbers"/>
  `
})
class TestWrapperComponent {
  onlyNumbers = true;
}
describe('OnlyNumbersDirective - Integration', () => {
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
  it('should accept only numbers', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = '123sfsef';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('123');
  });
  it('should not accept only numbers', () => {
    component.onlyNumbers = false;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = '123sfsef';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe('123sfsef');
  })
});
