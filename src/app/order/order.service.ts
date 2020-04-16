import {Injectable} from '@angular/core'

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'

import {MEAT_API} from '../app.api'


@Injectable()
export class OrderService{

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient){}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string>{
    //Modificado para ser tratado por HttpInterceptor
    //let headers = new HttpHeaders()
    //if(this.loginService.isLoggedIn()){
    //  headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
    //}
    //return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
    //        .map(order => order.id)
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .pipe(map(order => order.id))
  }

}