import {
  trigger,
  animate,
  style,
  group,
  query,
  transition
} from '@angular/animations';

export class AnimationProvider {
  public static routerTransition() {
    return trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            [
              style({ transform: 'translateX(100%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(0%)' })
              )
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              style({ transform: 'translateX(0%)' }),
              animate(
                '0.5s ease-in-out',
                style({ transform: 'translateX(-100%)' })
              )
            ],
            { optional: true }
          )
        ])
      ])
    ]);
  }
  public static slideAnimation() {
    return trigger('slideAnimation', [
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
  }
}
