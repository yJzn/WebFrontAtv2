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

produtos: Produto[] = [
  { id: 1, nome: 'Produto A', descricao: 'Descrição do Produto A', preco: 100, emEstoque: true, produtos: [] },
  { id: 2, nome: 'Produto B', descricao: 'Descrição do Produto B', preco: 150, emEstoque: false, produtos: [] },
  { id: 3, nome: 'Produto C', descricao: 'Descrição do Produto C', preco: 200, emEstoque: true, produtos: [] },
  { id: 4, nome: 'Produto D', descricao: 'Descrição do Produto D', preco: 250, emEstoque: true, produtos: [] },
  { id: 5, nome: 'Produto E', descricao: 'Descrição do Produto E', preco: 300, emEstoque: false, produtos: [] }
];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produtoId = Number(this.route.snapshot.params['id']);
    this.produtoSelecionado = this.produtos.find(p => p.id === this.produtoId);
  }
}
