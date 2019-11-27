import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStockItem } from 'src/app/core/state/warehouse/models';
import { AppState } from 'src/app/core/state/state';
import { Store, select } from '@ngrx/store';
import { selectStockItemState } from 'src/app/core/state/warehouse/selectors';

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.scss']
})
export class StockItemListComponent implements OnInit {

  public stockItemList$: Observable<IStockItem[]>

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
    this.stockItemList$ = this.store$.pipe(select(selectStockItemState));
  }

}
