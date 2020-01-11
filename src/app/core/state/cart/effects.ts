import {Effect, Actions, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehouseService } from 'src/app/shared/services/warehouse.service';
import { Action, Store, select } from '@ngrx/store';
import { Checkout, CheckoutSuccess } from 'src/app/core/state/cart/actions';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { AppState } from 'src/app/core/state/state';
import { selectCartRows } from 'src/app/core/state/cart/selectors';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>, private service: WarehouseService) {}

  @Effect()
  checkout: Observable<Action> = this.actions$.pipe(
    ofType<Checkout>(),
    withLatestFrom(this.store$.pipe(select(selectCartRows))),
    switchMap((checkoutAction, cartRows) => {
      return this.service.checkout(cartRows).pipe(map(response => {
        return new CheckoutSuccess();
      }));
    })
  )
}
