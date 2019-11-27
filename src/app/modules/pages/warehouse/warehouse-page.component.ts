import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/state';
import { GetStockItems } from 'src/app/core/state/warehouse/actions';

@Component({
  selector: 'app-warehouse-page',
  templateUrl: './warehouse-page.component.html',
  styleUrls: ['./warehouse-page.component.scss']
})
export class WarehousePageComponent implements OnInit {

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
    this.store$.dispatch(new GetStockItems());
  }

}
