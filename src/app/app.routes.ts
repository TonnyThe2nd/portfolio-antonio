import { Routes } from '@angular/router';
import { IntroducaoComponent } from './introducao/introducao.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    { path: 'sobre', component: SobreComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'introducao', component: IntroducaoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];
