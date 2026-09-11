import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    IntroducaoComponent,
    ContatoComponent,
    SobreComponent,
    ProjetosComponent,
    ExperienciasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  readonly year = new Date().getFullYear();
}
