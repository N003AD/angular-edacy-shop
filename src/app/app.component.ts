import { Component, OnInit } from '@angular/core';
import { SimpleProduct } from './interfaces/produit';
import { createProduct, createProducts } from './donnes/produit.generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public produits!: SimpleProduct[];
  public produit: SimpleProduct = createProduct();

  constructor(){  }
  ngOnInit(){
    this.produits = createProducts(16);
  }

  isPromo(produit:SimpleProduct):boolean{ // Quand on passe une méthode à ngIf il faut que cette méthode retourne un boolean
    return produit.promo;
   }
}
