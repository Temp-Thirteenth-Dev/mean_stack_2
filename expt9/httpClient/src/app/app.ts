import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HTTPService } from './app.config';
import { JsonPipe } from '@angular/common';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('httpClient');
  prod_service=inject(ProductService);
  data:any="Not yet fetched!!";

  get_request(id:string){
    this.prod_service.get_products(id).subscribe(data => {this.data=data});
  }
}
