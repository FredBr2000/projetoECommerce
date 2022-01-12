import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(
    private router: Router
  ) { }
 
  formLogin = new FormGroup({
    email: new FormControl('', []),
    senha: new FormControl('', [])
  });
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
    this.router.navigate(['/finalizar-pedido']);
  }
}
