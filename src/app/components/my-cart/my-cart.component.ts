import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LazyLoadEvent } from 'primeng-lts/api';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  products:any;
  quantity:number;
  selectedBrand=[];
  filteredBrands: any[];
  loading: boolean;
  customers=[];

  constructor(private cartservice: CartService) { }

  ngOnInit() {

     this.getProducts();
}

  getProducts() {
    this.loading = true;
    this.cartservice.getProductDetails().subscribe(resp => {
      this.products = resp;
      this.loading = false;
     // this.showSpinner=false;
    })
  }
//   filterBrand(event) {
//     //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
//     let filtered : any[] = [];
//     let query = event.query;
//     for(let i = 0; i < this.products.length; i++) {
//         let product = this.products[i];
//         if (product.brand.toLowerCase().indexOf(query.toLowerCase()) == 0) {
//             filtered.push(product);
//         }
//     }
    
//     this.filteredBrands = filtered;
// }

}
