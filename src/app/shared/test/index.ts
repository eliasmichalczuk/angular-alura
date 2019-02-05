import { DebugElement } from '@angular/core';
import { tick, ComponentFixture } from '@angular/core/testing';

export const ButtonClickEvents = {
    left:  { button: 0 },
    right: { button: 2 }
 };

export function click (el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
    if ( el instanceof HTMLElement) {
        el.click();
    } else {
        el.triggerEventHandler('click', eventObj);
    }
}

export function newEvent(eventName: string, bubbles = false, cancelable = false) {
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
}
