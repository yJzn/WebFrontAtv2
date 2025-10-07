import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sobre } from './sobre/sobre';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Produto } from './produto/produto';
import { Home } from './home/home';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'produtos', component: Produto },
  { path: 'sobre', component: Sobre },
  { path: 'produto-detalhe/:id', component: ProdutoDetalhe },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
