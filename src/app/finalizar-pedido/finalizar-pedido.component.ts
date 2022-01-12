import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';
import { Produto } from '../models/produto.model';
 
@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
 
export class FinalizarPedidoComponent implements OnInit {
 
  //armazenar os itens do carrinho de compras
  dados: any = {};
 
  constructor(
    private carrinhoComprasService: CarrinhoComprasService 
    //injeção de dependência
  ) { }
 
  ngOnInit(): void {
    //trazer todos os itens contidos no carrinho de compras
    this.dados = this.carrinhoComprasService.obterCarrinhoDeCompras();
  }
}
