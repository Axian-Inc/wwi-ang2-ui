import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICartRow } from 'src/app/core/state/cart/models';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/state/state';
import { selectCartRows, selectCartTotal } from 'src/app/core/state/cart/selectors';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss']
})
export class CartDisplayComponent implements OnInit {

  public cartRows$: Observable<ICartRow[]>;
  public cartTotal$: Observable<number>;

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
    this.cartRows$ = this.store$.pipe(select(selectCartRows));
    this.cartTotal$ = this.store$.pipe(select(selectCartTotal));
  }

}
