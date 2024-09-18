import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { queryById, queryBySelector } from "./selector";

interface Props<F = any> {
  fixture: ComponentFixture<F>,
  selector: string,
  withTestId?: boolean,
  eventName: string,
  event?: unknown
}
export function triggerEvent<F = any>({
  fixture,
  selector,
  withTestId = false,
  eventName,
  event = null
}: Props<F>) {
  let debug: DebugElement;
  let _;

  if (withTestId) {
    [debug, _] = queryById(fixture, selector);
  } else {
    [debug, _] = queryBySelector(fixture, selector);
  }
  debug.triggerEventHandler(eventName, event);
}
