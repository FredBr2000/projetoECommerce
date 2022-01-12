import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { LoginComponent } from './login/login.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CarrinhoComprasComponent,
    FinalizarPedidoComponent,
    LoginComponent,
    CadastroClientesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
