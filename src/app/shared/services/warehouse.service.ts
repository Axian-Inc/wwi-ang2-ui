import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) {}

  public getStockItems(): Observable<any> {
    return this.http.get(`${environment.svcUri}/warehouse/stockitem`).pipe(
      catchError(error => {
        return of(error)
      }),
      map(response => {
        return response;
      })
    )
  }

  checkout(cartRows: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
}