/* eslint-disable @typescript-eslint/no-explicit-any */
import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { queryById, queryBySelector } from "./selector";

interface Props<F = any> {
  fixture: ComponentFixture<F>,
  selector: string,
  withTestId?: boolean,
  event?: unknown
}

export function clickEvent<F = any>({
  fixture,
  selector,
  withTestId = false,
  event = null
}: Props<F>) {
  let debug: DebugElement;
  let _;

  if (withTestId) {
    [debug, _] = queryById(fixture, selector);
  } else {
    [debug, _] = queryBySelector(fixture, selector);
  }
  debug.triggerEventHandler('click', event);
}

export function clickElement<F = any>({
  fixture,
  selector,
  withTestId = false
}: Props<F>) {
  let _: DebugElement;
  let element: HTMLElement;

  if (withTestId) {
    [_, element] = queryById(fixture, selector);
  } else {
    [_, element] = queryBySelector(fixture, selector);
  }
  element.click()
}
