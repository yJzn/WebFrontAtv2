import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Produto } from './produto/produto';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Sobre } from './sobre/sobre';
import { MenuSuperior } from './menu-superior/menu-superior';

@NgModule({
  declarations: [
    App,
    Home,
    Produto,
    ProdutoDetalhe,
    Sobre,
    MenuSuperior
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
