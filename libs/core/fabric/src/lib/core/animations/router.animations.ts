import { animate, state, style, transition, trigger } from '@angular/animations';

export function routerTransition() {
  return AnimationSlideToLeft();
}

export function AnimationSlideToRight() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '40%' })),
    state('*', style({ position: 'fixed', width: '0%' })),
    transition(':enter', [style({ transform: 'translateX(-40%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))]),
    transition(':leave', [style({ transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(40%)' }))])
  ]);
}

export function AnimationSlideToLeft() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '40%' })),
    state('*', style({ position: 'fixed', width: '0%' })),
    transition(':enter', [style({ transform: 'translateX(40%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))]),
    transition(':leave', [style({ transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(-40%)' }))])
  ]);
}

export function AnimationSlideToBottom() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
    transition(':enter', [style({ transform: 'translateY(-100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))]),
    transition(':leave', [style({ transform: 'translateY(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))])
  ]);
}

export function AnimationSlideToTop() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
    transition(':enter', [style({ transform: 'translateY(100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))]),
    transition(':leave', [style({ transform: 'translateY(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))])
  ]);
}
