import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
export const SlideAnimation = trigger('slideAnimation', [
  transition(
    ':increment',
    group([
      query(':enter', [
        style({
          transform: 'translateX(100%)'
        }),
        animate('0.5s ease-out', style('*'))
      ]),
      query(':leave', [
        animate(
          '0.5s ease-out',
          style({
            transform: 'translateX(-100%)'
          })
        )
      ])
    ])
  ),
  transition(
    ':decrement',
    group([
      query(':enter', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-out', style('*'))
      ]),
      query(':leave', [
        animate(
          '0.5s ease-out',
          style({
            transform: 'translateX(100%)'
          })
        )
      ])
    ])
  )
]);
