import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
 
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
 
  produtos: Produto[] = [
    {
      idProduto: 1,
      nome: 'Notebook Samsung',
      preco: 2264.96,
      quantidade: 10,
      descricao: 'Notebook Samsung Book Intel Celeron-6305 4GB 500GB W10 FHD 15.6 Cinza Chumbo NP550XDA-KO1BR',
      foto: 'https://images-americanas.b2w.io/produtos/01/00/img/3081358/8/3081358804_1SZ.jpg'
    },
    {
      idProduto: 2,
      nome: 'Smart TV Samsung',
      preco: 1999.99,
      quantidade: 20,
      descricao: 'Samsung Smart TV LED 40 Tizen FHD 40T5300 2020 com WIFI HDR para Brilho e Contraste e Plataforma Tizen',
      foto: 'https://images-americanas.b2w.io/produtos/01/00/img/1704351/0/1704351010_1SZ.jpg'
    },
    {
      idProduto: 3,
      nome: 'Impressora HP',
      preco: 403.99,
      quantidade: 15,
      descricao: 'Impressora multifuncional HP DeskJet Ink Advantage 2774 (7FR22A)',
      foto: 'https://images-americanas.b2w.io/produtos/01/00/img/2639189/2/2639189271_1SZ.jpg'
    },
    {
      idProduto: 4,
      nome: 'Mouse Multilaser',
      preco: 14.99,
      quantidade: 30,
      descricao: 'Mouse C/Fio Optico Mo300 Multilaser',
      foto: 'https://images-americanas.b2w.io/produtos/3057334749/imagens/mouse-c-fio-optico-mo300-multilaser/3057334749_1_xlarge.jpg'
    },
    {
      idProduto: 5,
      nome: 'Teclado Multilaser',
      preco: 34.90,
      quantidade: 16,
      descricao: 'Teclado Usb Básico Slim Preto TC213 Multilaser',
      foto: 'https://images-americanas.b2w.io/produtos/01/00/img/60725/6/60725647_1SZ.jpg'
    },
    {
      idProduto: 6,
      nome: 'Mochila Targus',
      preco: 184.55,
      quantidade: 10,
      descricao: 'Mochila para Notebook TSB966DI70 15,6 Poliéster Intellect Essential Preta - Targus',
      foto: 'https://images-americanas.b2w.io/produtos/01/00/img/1829677/9/1829677988_1SZ.jpg'
    }
  ];
 
  constructor() { }
 
  //método para retornar os dados dos produtos
  getAll(): Produto[] {
    return this.produtos;
  }
}
