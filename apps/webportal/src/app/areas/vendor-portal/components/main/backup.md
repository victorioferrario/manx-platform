## Notes
[08/21/2018 | 9:30 am]
Removed the page driven navigation.

```html
 <section class="container fadeInUp animated-500" fxLayout fxLayout.xs="column" fxLayoutAlign="center" fxLayoutGap="10px"
        fxLayoutGap.xs="0">
    <article class="item item-2 card-white" fxFlex="20%" fxFlex>
        <a href="javascript:void(0);" [routerLink]="['/vendor']" [queryParams]="{debug: true}" mat-button>Dashboard</a>
    </article>
    <article class="item item-2 card-white" fxFlex="20%" fxFlex>
        <a href="javascript:void(0);" [routerLink]="['/vendor/products']" [queryParams]="{debug: true}" mat-button>Products</a>
    </article>
    <article class="item item-2 card-white" fxFlex="20%" fxFlex>
        <a href="javascript:void(0);" [routerLink]="['/buyer']" [queryParams]="{debug: true}" mat-button>Buyer</a>
    </article>
</section>
```