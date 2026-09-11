import { Component } from '@angular/core';
@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css',
})
export class SobreComponent {
  readonly skills = [
    {
      code: '01 / { }',
      title: 'Back-end & arquitetura',
      description:
        'APIs, serviços e integrações com foco em manutenção, desacoplamento e performance.',
      techs: [
        'C# / .NET',
        'Python / FastAPI',
        'DDD · SOLID',
        'Microsserviços',
        'Kafka · RabbitMQ',
      ],
    },
    {
      code: '02 / ↗',
      title: 'Front-end & experiência',
      description:
        'Interfaces para aplicações corporativas, visualização de indicadores e integração com APIs.',
      techs: ['Angular', 'TypeScript', 'JavaScript', 'HTML · CSS', 'Bootstrap'],
    },
    {
      code: '03 / ≋',
      title: 'Dados & cloud',
      description:
        'Da coleta à consulta: integração, persistência e processamento de dados com entregas automatizadas.',
      techs: [
        'SQL · PostgreSQL',
        'MongoDB',
        'Cognite Data Fusion',
        'Azure · CI/CD',
        'Docker · Kubernetes',
      ],
    },
    {
      code: '04 / ✳',
      title: 'Inteligência artificial',
      description:
        'Pesquisa em visão computacional, modelos explicáveis e agentes para automação de processos.',
      techs: [
        'TensorFlow · PyTorch',
        'OpenCV · MediaPipe',
        'CNNs · XAI',
        'Scikit-learn',
        'Agentes de IA · n8n',
      ],
    },
  ];
}
