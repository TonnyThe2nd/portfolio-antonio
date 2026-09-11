import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isLight = false;
  menuAberto = false;
  activeSection = 'introducao';
  readonly links = [
    { id: 'habilidades', label: 'Sobre' },
    { id: 'experiencias', label: 'Experiência' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ];
  ngOnInit() {
    try {
      this.isLight = localStorage.getItem('portfolio-theme') === 'light';
    } catch {
      /* Tema padrão quando o armazenamento não estiver disponível. */
    }
    this.applyTheme();
  }
  @HostListener('window:scroll') onScroll() {
    for (const id of [
      'introducao',
      ...this.links.map((link) => link.id),
    ].reverse()) {
      if (
        (document.getElementById(id)?.getBoundingClientRect().top ??
          Infinity) <= 150
      ) {
        this.activeSection = id;
        break;
      }
    }
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 8
    )
      this.activeSection = 'contato';
  }
  @HostListener('document:keydown.escape') closeMenu() {
    this.menuAberto = false;
  }
  toggleTheme() {
    this.isLight = !this.isLight;
    this.applyTheme();
    try {
      localStorage.setItem('portfolio-theme', this.isLight ? 'light' : 'dark');
    } catch {
      /* A troca de tema continua funcionando sem persistência. */
    }
  }
  private applyTheme() {
    document.body.classList.toggle('light-theme', this.isLight);
  }
}
