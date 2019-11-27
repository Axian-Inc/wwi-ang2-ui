import { Component, OnInit, Input } from '@angular/core';
import { IStockItem } from 'src/app/core/state/warehouse/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/state';
import { AddItemToCart } from 'src/app/core/state/cart/actions';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  @Input()
  stockItem: IStockItem;

  public qty: number = null;

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
  }

  addToCart() {
    if(this.qty) {
      this.store$.dispatch(new AddItemToCart(this.stockItem, this.qty))
    }
  }
}
