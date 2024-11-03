import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LunaFormatTypes, LunaInputComponent, LunaInputSize, LunaInputVariant } from "projects/lunaui-angular/src/public-api";
import { Booleanish } from "projects/lunaui-angular/src/lib/ts-helpers/ts-helpers";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { getText, queryById, queryBySelector } from "../helpers/selector";
import { existByTestId } from "../helpers/finder";

@Component({
  selector: 'test-wrapper',
  standalone: true,
  imports: [
    LunaInputComponent,
    ReactiveFormsModule
  ],
  template: `
    <luna-input
      [label]="label"
      [size]="size"
      [variant]="variant"
      [error]="error"
      [helperText]="helperText"
      [allowWhiteSpaces]="allowWhiteSpaces"
      [numbersOnly]="numbersOnly"
      [transformToLowercase]="toLowerCase"
      [transformToUppercase]="toUppercase"
      [format]="format"
      (focus)="onFocus($event)"
      (blur)="onBlur($event)"
      (input)="onInput($event)"
      (change)="onChange($event)"
      [formControl]="control"
    ></luna-input>
  `
})
class TestWrapperComponent {
  public control = new FormControl()
  public label = ''
  public size: LunaInputSize = 'medium';
  public variant: LunaInputVariant = 'outlined';
  public error: Booleanish = false;
  public helperText = 'This is a helper text';
  public allowWhiteSpaces = false
  public numbersOnly = false;
  public toLowerCase = false;
  public toUppercase = false;
  public format: LunaFormatTypes | null = null;

  public onFocus($event: FocusEvent) {

  }
  public onBlur($event: FocusEvent) {

  }
  public onInput($event: InputEvent) {

  }
  public onChange($event: Event) {

  }
}

describe('LunaInputComponent - Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let testId = 'luna-input'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestWrapperComponent // Only import the TestWrapperComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render the input', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input).toBeTruthy();
  });
  it('Should render the label', () => {
    const textLabel = 'Test Label';
    component.label = textLabel;
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    expect(getText(debug, '', 'label')).toEqual(textLabel);
  });
  it('Should change size successfully', () => {
    const [debug, element] = queryById(fixture, testId)
    expect(element.classList).toContain('luna-input-medium');
    component.size = 'large';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-large');
    component.size = 'small';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-small');
  })
  it('Should change variant successfully', () => {
    const [debug, element] = queryById(fixture, testId)
    expect(element.classList).toContain('luna-input-outlined');
    component.variant = 'filled';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-filled');
    component.variant = 'underlined';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-underlined');
  })
  it('Should show error successfully', () => {
    const [debug, element] = queryById(fixture, testId)
    expect(element.classList).not.toContain('error');
    component.error = true;
    fixture.detectChanges();
    expect(element.classList).toContain('error');
    component.error = 'false';
    fixture.detectChanges();
    expect(element.classList).not.toContain('error');
    component.error = 'true';
    fixture.detectChanges();
    expect(element.classList).toContain('error');
  })
  it('Should disable successfully', () => {
    const [debug, element] = queryById(fixture, testId)
    queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')
    component.control.disable()
    fixture.detectChanges();
    expect(debug.classes['disabled']).toBeTruthy()
    component.control.enable()
    fixture.detectChanges();
    expect(debug.classes['disabled']).toBeUndefined()
    component.control.disable()
    fixture.detectChanges();
    expect(debug.classes['disabled']).toBeTruthy()
  })
  it('Should show helper text successfully', () => {
    const [debug, element] = queryById(fixture, testId)
    expect(existByTestId({ scope: debug, id: 'luna-alert' })).toBeTruthy();
    component.helperText = ''
    fixture.detectChanges();
    expect(existByTestId({ scope: debug, id: 'luna-alert' })).toBeFalse()
  })
  it('should not allow whitespaces', () => {
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = '  test   '
    expect(input.value).toEqual('  test   ')
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('test')
  });
  it('should allow whitespaces', () => {
    component.allowWhiteSpaces = true
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = '  test   '
    expect(input.value).toEqual('  test   ')
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('  test   ')
  });
  it('should allow numbers only', () => {
    component.numbersOnly = true;
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = '123tht565 56'
    expect(input.value).toEqual('123tht565 56')
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('12356556')
  });
  it('should allow numbers and letters', () => {
    component.numbersOnly = false;
    component.allowWhiteSpaces = true;
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = '123tht565 56'
    expect(input.value).toEqual('123tht565 56')
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('123tht565 56')
  })
  it('should convert to lowercase', () => {
    component.toLowerCase = true;
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = 'TEST'
    expect(input.value).toEqual('TEST')
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('test')
  });
  it('should convert to uppercase', () => {
    component.toUppercase = true;
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = 'test'
    expect(input.value).toEqual('test')
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('TEST')
  });
  it('Should format to currency', () => {
    component.format = 'currency';
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = '1000000';
    expect(input.value).toEqual('1000000');
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('$1,000,000')
  })
  it('Should format to credit card', () => {
    component.format = 'creditCard';
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    input.value = '4111111111111111';
    expect(input.value).toEqual('4111111111111111');
    input.dispatchEvent(new Event('input', { bubbles: true }))

    fixture.detectChanges();
    expect(input.value).toEqual('4111 1111 1111 1111')
  })
  it('should format to phone', () => {
    component.format = 'phone';
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')
    input.value = '3113415414';
    expect(input.value).toEqual('3113415414');
    input.dispatchEvent(new Event('input', { bubbles: true }))
    fixture.detectChanges();
    expect(input.value).toEqual('311-341-5414')
  })
  it('Should call focus and blur functions', () => {
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    const focusSpy = spyOn(component, 'onFocus');
    const blurSpy = spyOn(component, 'onBlur');

    input.focus();
    expect(focusSpy).toHaveBeenCalledTimes(1);
    input.blur();
    expect(blurSpy).toHaveBeenCalledTimes(1);
  })
  it('Should call input and change functions', () => {
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')

    const inputSpy = spyOn(component, 'onInput');
    const changeSpy = spyOn(component, 'onChange');

    input.value = 'test';
    input.dispatchEvent(new Event('input', { bubbles: true }))
    input.dispatchEvent(new Event('change', { bubbles: true }))
    fixture.detectChanges();
    expect(inputSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalled();
  })
  it('Should update the values in the formControl correctly', () => {
    component.format = 'phone';
    fixture.detectChanges();
    const [debug, element] = queryById(fixture, testId)
    const [debugInput, input] = queryBySelector<DebugElement, HTMLInputElement>(debug, 'input')
    input.value = '3113415414';
    expect(input.value).toEqual('3113415414');
    input.dispatchEvent(new Event('input', { bubbles: true }))
    fixture.detectChanges();
    expect(input.value).toEqual('311-341-5414')
    expect(component.control.value).toEqual('3113415414')
  })
});
