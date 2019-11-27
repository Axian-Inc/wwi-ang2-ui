import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/state';
import { GetStockItems } from 'src/app/core/state/warehouse/actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
    this.store$.dispatch(new GetStockItems());
  }

}
