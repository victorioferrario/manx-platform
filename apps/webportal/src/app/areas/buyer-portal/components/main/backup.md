## Notes
[08/21/2018 | 9:30 am]
Removed page driven navigation

```html

 <section class="container fadeInUp animated-500" 
 fxLayout fxLayoutAlign="center" fxLayout.xs="column" fxLayoutAlign="center" fxLayoutGap="10px"
            fxLayoutGap.xs="0">
            <article class="item item-1 card-white" fxFlex="20%" fxFlex>
                <a href="javascript:void(0);" [routerLink]="['/buyer']" mat-button>Dashboard</a>
            </article>
            <article class="item item-2 card-white" fxFlex="20%" fxFlex>
                <a href="javascript:void(0);" [routerLink]="['/buyer/cart']" mat-button>Shopping Cart</a>
            </article>
            <article class="item item-3 card-white" fxFlex="20%" fxFlex>
                <a href="javascript:void(0);" [routerLink]="['/buyer/profile']" mat-button>My Profile</a></article>
            <article class="item item-3 card-white" fxFlex="20%" fxFlex>
                <a href="javascript:void(0);" [routerLink]="['../vendor']" mat-button>Vedor</a></article>
</section>        
<button mat-button type="button" (click)="selectedPortal = programmingJoke">
    Programming joke
</button>
<button mat-button type="button" (click)="selectedPortal = mathJoke">
    Math joke
</button>
<button mat-button type="button" (click)="selectedPortal = scienceJoke">
    Science joke
</button>
<button type="button" (click)="onHandleClick('programmingJoke')">
    Programming joke
</button>
<ng-template [cdkPortalOutlet]="selectedPortal"></ng-template>
<div *cdk-portal>
        <div class="app-loader">Loading</div>
</div> 


```