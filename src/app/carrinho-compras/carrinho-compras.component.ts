import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';
import { Produto } from '../models/produto.model';
 
@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {
 
  //armazenar os itens do carrinho de compras
  dados: any = {};
 
  constructor(
    //injeção de dependência
    private carrinhoComprasService: CarrinhoComprasService 
  ) { }
 
 
  ngOnInit(): void {
    //trazer todos os itens contidos no carrinho de compras
    this.dados = this.carrinhoComprasService.obterCarrinhoDeCompras();
  }
 
  limpar(): void {
    this.carrinhoComprasService.limparCarrinho();
    this.ngOnInit();
  }
 
  adicionar(item: Produto): void {
    this.carrinhoComprasService.adicionarQuantidadeItem(item);
    this.ngOnInit();
  }
 
  remover(item: Produto): void {
    this.carrinhoComprasService.diminuirQuantidadeItens(item);
    this.ngOnInit();
  }
 
}
