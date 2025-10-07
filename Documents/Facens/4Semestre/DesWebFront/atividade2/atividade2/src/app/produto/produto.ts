import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrl: './produto.css'
})
export class Produto {
  produtos = [
    { id: 1, nome: 'Produto A', descricao: 'Descrição do Produto A', preco: 100, emEstoque: true },
    { id: 2, nome: 'Produto B', descricao: 'Descrição do Produto B', preco: 150, emEstoque: false },
    { id: 3, nome: 'Produto C', descricao: 'Descrição do Produto C', preco: 200, emEstoque: true },
    { id: 4, nome: 'Produto D', descricao: 'Descrição do Produto D', preco: 250, emEstoque: true },
    { id: 5, nome: 'Produto E', descricao: 'Descrição do Produto E', preco: 300, emEstoque: false }
  ];
}

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  emEstoque: boolean;
}
