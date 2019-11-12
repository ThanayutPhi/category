import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  data: any;

  constructor(private categoryService: CategoryService) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  ngOnInit() {
    console.log("ngOnInit");
    this.categoryService.onDataChanged.subscribe((respone: any) => {
      this.data = respone
      console.log(respone);
    });
  }

}
