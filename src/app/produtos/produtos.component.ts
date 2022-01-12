import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  page = 1;
  filtro: string = "";
  itemProduto: Produto = {
    idProduto: 0, nome: '', preco: 0, quantidade: 0,
    descricao: '', foto: ''
  };


  constructor(
    private produtoService: ProdutoService,
    private carrinhoComprasService: CarrinhoComprasService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }
  //função para avançar e voltar na paginação
  handlePageChange(event: any): void {
    this.page = event;
  }

  obterProduto(item: Produto): void {
    this.itemProduto = item;
  }

  adicionarProduto(item: Produto): void {

    this.carrinhoComprasService.adicionarItem(item);

    this.router.navigate(['/carrinho-compras']);
  }



}
