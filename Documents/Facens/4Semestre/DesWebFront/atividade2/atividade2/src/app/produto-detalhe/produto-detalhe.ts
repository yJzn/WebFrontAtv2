import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe implements OnInit {
produtoId: number = 0;
produtoSelecionado: Produto | undefined;
produtos: Produto[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtoId = Number(this.route.snapshot.params['id']);
    this.produtoSelecionado = this.produtos.find(p => p.id === this.produtoId);
  }
}
