import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  onDataChanged: BehaviorSubject<any>;

  constructor(private http: HttpClient) { this.onDataChanged = new BehaviorSubject([]); }

  resolve(route: ActivatedRouteSnapshot) {
    console.log("resolve");
    this.getCategoryData();
  }

  getCategoryData() {
    return new Promise((resolve, reject) => {
      this.http.get("../../../assets/json/category_data.json").subscribe((response: any) => {
        this.onDataChanged.next(response.data);
        resolve(response.data);
      }, reject);
    });
  }

}
