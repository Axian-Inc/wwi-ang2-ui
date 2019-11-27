import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStockItem } from 'src/app/core/state/warehouse/models';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/state/state';
import { selectStockItemState } from 'src/app/core/state/warehouse/selectors';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  public stockItemList$: Observable<IStockItem[]>

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
    this.stockItemList$ = this.store$.pipe(select(selectStockItemState));
  }

}
