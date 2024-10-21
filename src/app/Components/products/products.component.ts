import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private data: AuthService) {}
  ngOnInit(): void {
    this.data.getProuct().subscribe((data) => {
      this.products = data.products;
      console.log(data.products);
    });
  }
}
