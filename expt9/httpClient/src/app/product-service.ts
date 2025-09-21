import { inject, Injectable } from '@angular/core';
import { HTTPService } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    backend=inject(HTTPService)
    get_products(id:string){
        return this.backend.http.get('http://localhost:9000/products/'+id,{})
    }
}
