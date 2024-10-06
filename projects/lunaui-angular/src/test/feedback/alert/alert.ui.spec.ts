import { Component } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { LunaAlertComponent } from "projects/lunaui-angular/src/public-api"
import { queryById } from "../../helpers/selector"
import { clickElement } from "../../helpers/click";
import { existBySelector, existByTestId } from "../../helpers/finder";

@Component({
  template: `
    <luna-alert
      [show]="showAlert"
      [dismissible]="showDismissable"
      [showIcon]="showIcon"
      (dismissed)="onDissmissed()"
    >
      Test Alert
    </luna-alert>
  `,
})
class TestComponent {
  showDismissable = false;
  showAlert = true;
  showIcon = false;

  onDissmissed() {
    console.log('dismissed')
  }
}

describe('LunaAlertComponent - Integration ', () => {
  let fixture: ComponentFixture<TestComponent>
  let component: TestComponent
  const testId = 'luna-alert'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [LunaAlertComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('Should create alert component', () => {
    const [debug, element] = queryById(fixture, testId)
    expect(debug).toBeTruthy()
  })
  it('Should not show dismissable button when dismissible is false', () => {
    expect(existByTestId({ scope: fixture, id: 'luna-icon-button' })).toBeFalsy()
  })
  it('Should show dismissable button and hide alert when click', () => {
    component.showDismissable = true;
    fixture.detectChanges()

    const [alertDebug, alertElement] = queryById<TestComponent, HTMLParagraphElement>(fixture, testId)

    const [buttonDebug, buttonElement] = queryById(alertDebug, 'luna-icon-button')

    expect(buttonDebug).toBeTruthy()

    clickElement({
      fixture,
      selector: 'luna-icon-button',
      withTestId: true
    })

    fixture.detectChanges()

    expect(existByTestId({ scope: fixture, id: testId })).toBeFalsy()
  })
  it('Should show or hide alert depending in "show" input value', () => {
    component.showAlert = false;
    fixture.detectChanges()

    expect(existByTestId({ scope: fixture, id: testId })).toBeFalsy()

    component.showAlert = true;
    fixture.detectChanges()
    expect(existByTestId({ scope: fixture, id: testId })).toBeTruthy()
  })
  it('Should show or hide icon depending in "showIcon" input value', () => {
    component.showIcon = true;
    fixture.detectChanges()

    expect(existBySelector({ scope: fixture, selector: 'svg' })).toBeTruthy()

    component.showIcon = false;
    fixture.detectChanges();

    expect(existBySelector({ scope: fixture, selector: 'svg' })).toBeFalsy()
  })
  it('Should emit "dismissed" event when click in dismissible button', () => {
    component.showDismissable = true;
    fixture.detectChanges()

    spyOn(component, 'onDissmissed')

    clickElement({
      fixture,
      selector: 'luna-icon-button',
      withTestId: true
    })

    expect(component.onDissmissed).toHaveBeenCalled()
  })
})
