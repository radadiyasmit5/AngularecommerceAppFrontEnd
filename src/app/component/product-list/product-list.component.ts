import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Product from 'src/app/classes/product';
import { ProductserviceService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categoryid!: number;
  constructor(
    private productservice: ProductserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listallproducts();
    });
    this.listallproducts();
  }

  listallproducts() {
    console.log(this.route.snapshot.paramMap.has('id'));

    return this.productservice.getproducts().subscribe((data) => {
      this.products = data;
    });
  }

  listproductbycategory() {
    const isparamsidExist: Boolean = this.route.snapshot.paramMap.has('id');
    if (isparamsidExist) {
      this.categoryid = +this.route.snapshot.paramMap.get('id');
    } else {
      this.categoryid = 1;
    }

    return this.productservice
      .getproductsbycategory(this.categoryid)
      .subscribe((data) => {});
  }
}
