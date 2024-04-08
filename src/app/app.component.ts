import { Component, OnInit } from '@angular/core';
import { SimpleProduct } from './interfaces/produit';
import { createProduct, createProducts } from './donnes/produit.generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public productCache!: SimpleProduct[];
  public produits!: SimpleProduct[];
  public produit: SimpleProduct = createProduct();
  public message= 'Recherche';

  constructor(){  }
  public ngOnInit(){
    this.produits = createProducts(36);
    this.productCache = this.produits;

  }

  public isPromo(produit:SimpleProduct):boolean{ // Quand on passe une méthode à ngIf il faut que cette méthode retourne un boolean
    return produit.promo;
   }

  //  addToCard(prod: SimpleProduct){
  //   console.log(prod.id);
  //    }
  // public addToCard(e: any){
  //   console.log(e);
  //    }
  public addToCard(prod: SimpleProduct){
    console.log(prod);
     }

   public filterProducts(text: string){
      // console.log(e);
      this.handleFiltering(text);
       }
  private handleFiltering(t: string){
    if(t === null || !t.length) {
      this.produits = this.productCache;
    }
    this.produits = this.productCache.filter((_produit) => _produit.name.includes(t));
     }
}
