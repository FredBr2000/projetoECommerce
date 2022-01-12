import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  //atributo
  endereco: any = {
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  }

  constructor(
    private consultaCepService: ConsultaCepService
    //injeção de dependência
  ) { }

  formCadastro = new FormGroup({
    nome: new FormControl('', []),
    telefone: new FormControl('', []),
    cpf: new FormControl('', []),
    email: new FormControl('', []),
    senha: new FormControl('', []),
    senhaConfirmacao: new FormControl('', []),
    cep: new FormControl('', []),
    numero: new FormControl('', []),
    complemento: new FormControl('', [])
  });

  ngOnInit(): void {
  }

  obterEndereco(): void {

    var cep = this.formCadastro.value.cep;

    if (cep.length >= 8) {
      this.consultaCepService.obterEndereco(cep)
        .subscribe( //retornar o promisse da API (resultado)
          (data: any) => {

            if (!data.erro) {

              this.endereco.logradouro = data.logradouro;
              this.endereco.bairro = data.bairro;
              this.endereco.localidade = data.localidade;
              this.endereco.uf = data.uf;
            }
            else {
              this.endereco.logradouro = '';
              this.endereco.bairro = '';
              this.endereco.localidade = '';
              this.endereco.uf = '';
            }
          },
          (e) => {
            this.endereco.logradouro = '';
            this.endereco.bairro = '';
            this.endereco.localidade = '';
            this.endereco.uf = '';
          }
        )

    }

  }

}
