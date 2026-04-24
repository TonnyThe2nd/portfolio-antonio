import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: []
})
export class HeaderComponent implements OnInit {
  isLight = true; 
  menuAberto = false;
  activeSection: string = 'introducao';
  isScrolled: boolean = false;

  ngOnInit() {
    this.applyTheme();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['introducao', 'habilidades', 'experiencias', 'projetos', 'contato'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  toggleTheme() {
    this.isLight = !this.isLight;
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isLight) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }

  closeMenu() {
    this.menuAberto = false;
  }

  rolarComponente(id: string) {
    this.activeSection = id;
    this.closeMenu(); 
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  }
}