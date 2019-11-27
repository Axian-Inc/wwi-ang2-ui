import {Effect, Actions, ofType} from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../state';
import {switchMap, map} from 'rxjs/operators';
import * as warehouseActions from './actions';
import { WarehouseService } from 'src/app/shared/services/warehouse.service';

@Injectable()
export class WarehouseEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>, private warehouseSvc: WarehouseService){}
  @Effect()
  getStockItems: Observable<Action> = this.actions$.pipe(
    ofType<warehouseActions.GetStockItems>(warehouseActions.ActionTypes.GET_STOCK_ITEMS),
    switchMap(() => {
      return this.warehouseSvc.getStockItems().pipe(
        map(response => {
          if(response) {
            return new warehouseActions.GetStockItemsSuccess(response);
          }
        })
      )
    })
  )
}
