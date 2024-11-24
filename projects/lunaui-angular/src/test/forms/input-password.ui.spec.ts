import { Component, DebugElement } from "@angular/core";
import { LunaInputSize, LunaInputVariant, LunaPasswordInputComponent } from "../../public-api";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { queryById, queryBySelector } from "../helpers/selector";
import { existBySelector } from "../helpers/finder";
import { clickElement } from "../helpers/click";

@Component({
  selector: 'test-wrapper',
  standalone: true,
  imports: [
    LunaPasswordInputComponent,
    ReactiveFormsModule
  ],
  template: `
    <luna-password-input
      [formControl]="control"
      [label]="label"
      [size]="size"
      [variant]="variant"
      (change)="onChange($event)"
      (focus)="onFocus($event)"
      (blur)="onBlur($event)"
      (input)="onInput($event)"
    ></luna-password-input>
  `
})
class TestWrapperComponent {
  public control = new FormControl()
  public label = ''
  public size: LunaInputSize = 'medium'
  public variant: LunaInputVariant = 'outlined';

  public onFocus($event: FocusEvent) {

  }
  public onBlur($event: FocusEvent) {

  }
  public onInput($event: InputEvent) {

  }
  public onChange($event: Event) {

  }
}
describe('LunaPasswordInputComponent - Integration', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let testId = 'luna-input-password'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestWrapperComponent
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
    component.label = 'Password';
    fixture.detectChanges();
    let [debug, ele] = queryById(fixture, testId);
    let [labelDebug, labelEle] = queryBySelector<DebugElement, HTMLLabelElement>(debug, 'label')
    expect(labelEle).toBeTruthy()
    expect(labelEle.innerText).toContain(component.label)
    component.label = '';
    fixture.detectChanges();
    [debug, ele] = queryById(fixture, testId);
    expect(existBySelector({ scope: debug, selector: 'label' })).toBeFalse()
  })
  it('Should change size successfully', () => {
    const [debug, element] = queryById(fixture, 'luna-input')
    expect(element.classList).toContain('luna-input-medium');
    component.size = 'large';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-large');
    component.size = 'small';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-small');
  })
  it('Should change variant successfully', () => {
    const [debug, element] = queryById(fixture, 'luna-input')
    expect(element.classList).toContain('luna-input-outlined');
    component.variant = 'filled';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-filled');
    component.variant = 'underlined';
    fixture.detectChanges();
    expect(element.classList).toContain('luna-input-underlined');
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
  it('Should change input type successfully', () => {
    const [debug, element] = queryBySelector<any, HTMLInputElement>(fixture, 'input')
    expect(element.type).toBe('password')
    clickElement({
      fixture, selector: 'button', withTestId: false
    })
    fixture.detectChanges();
    expect(element.type).toBe('text')
  })
})
