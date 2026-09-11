import { Component } from '@angular/core';
@Component({
  selector: 'app-experiencias',
  imports: [],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.css',
})
export class ExperienciasComponent {
  readonly experiences = [
    {
      period: 'JUN 2026 — ATUAL',
      current: true,
      company: 'Radix Engenharia e Software',
      role: 'Desenvolvedor Full Stack',
      context: 'Projeto International Paper',
      items: [
        'Desenvolvimento em Python e Angular para integração de dados operacionais e visualização de KPIs, com Cognite Data Fusion, SQL e MongoDB.',
        'Refatoração e otimização com concorrência, processamento paralelo, cache/TTL e melhoria de requests e persistência.',
        'Aplicação de DDD, SOLID e Clean Code; autenticação, autorização e entregas com Azure DevOps e CI/CD. Agentes de IA e n8n para automação de fluxos.',
      ],
      techs: ['Python', 'Angular', 'Cognite', 'MongoDB', 'Azure DevOps', 'n8n'],
    },
    {
      period: '2025 — JUN 2026',
      current: false,
      company: 'Centro Universitário Barão de Mauá',
      role: 'Desenvolvedor Full Stack',
      context: 'Aplicações e integrações corporativas',
      items: [
        'Desenvolvimento de APIs REST e microsserviços com ASP.NET Core, Kafka e Angular, com menor acoplamento entre sistemas.',
        'Automação de integrações com Python e webhooks, conteinerização com Docker e orquestração com Kubernetes.',
        'Colaboração na migração de um monólito para arquitetura orientada a eventos, apoiando a escalabilidade horizontal.',
      ],
      techs: ['C# / .NET', 'Angular', 'Kafka', 'Docker', 'Kubernetes'],
    },
    {
      period: 'JUN 2024 — ATUAL',
      current: true,
      company: 'Universidade de São Paulo · USP',
      role: 'Iniciação científica em IA',
      context: 'Inteligência artificial e processamento de imagens',
      items: [
        'Pesquisa aplicada à detecção precoce de Alzheimer com Deep Learning e visão computacional.',
        'Desenvolvimento de CNNs, pré-processamento de imagens médicas e elaboração de resultados e relatórios técnicos.',
      ],
      techs: ['Python', 'TensorFlow', 'CNNs', 'OpenCV', 'MediaPipe'],
    },
  ];
}
