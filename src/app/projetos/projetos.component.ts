import { Component } from '@angular/core';
@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css',
})
export class ProjetosComponent {
  selected = 'Todos';
  readonly filters = [
    'Todos',
    'Back-end',
    'Inteligência artificial',
    'Full Stack',
  ];
  readonly projects = [
    {
      id: '01',
      category: 'Back-end',
      title: 'Code Agent — IA local e hardware',
      description:
        'Agente de código com modelos locais via Ollama, seleção por orçamento de RAM/VRAM e planejamento de subtarefas. Leitura e edição de arquivos com ferramentas controladas.',
      techs: ['Python', 'Ollama', 'DDD', 'Docker'],
      visual: 'events',
      diagram: ['HARDWARE', 'OLLAMA', 'FERRAMENTAS'],
      url: 'https://github.com/TonnyThe2nd/code_agent_with_hardware_management',
      label: 'Ver repositório',
    },
    {
      id: '02',
      category: 'Inteligência artificial',
      title: 'File Reader Agent — consulta com RAG',
      description:
        'Consulta a documentos com IA local, busca híbrida e RAG. Interface de chat com fontes clicáveis, biblioteca de arquivos e histórico persistente por usuário.',
      techs: ['Angular', 'FastAPI', 'PostgreSQL', 'Ollama'],
      visual: 'network',
      diagram: ['DOCUMENTOS', 'RAG', 'CHAT / FONTES'],
      url: 'https://github.com/TonnyThe2nd/file-reader-agent',
      label: 'Ver repositório',
    },
    {
      id: '03',
      category: 'Full Stack',
      title: 'UrbanEye — monitoramento ambiental',
      description:
        'Aplicativo colaborativo para registrar ocorrências ambientais com fotos e geolocalização. Proposta offline-first com Flutter e backend modular em FastAPI.',
      techs: ['Flutter', 'FastAPI', 'PostgreSQL / PostGIS', 'RabbitMQ'],
      visual: 'events',
      diagram: ['FLUTTER', 'FASTAPI', 'POSTGIS'],
      url: 'https://github.com/TonnyThe2nd/ambiental-app',
      label: 'Ver repositório',
    },
    {
      id: '04',
      category: 'Full Stack',
      title: 'ChatFit',
      description:
        'Aplicação que integra .NET, Angular e APIs de IA. Combina Dapper e Entity Framework com padrões de repositório e automação de processos.',
      techs: ['C# / .NET', 'Angular', 'Gemini', 'SQL Server'],
      visual: 'chat',
      diagram: ['ANGULAR', 'API / .NET', 'GEMINI'],
      url: 'https://github.com/TonnyThe2nd/Projeto-Chatfit',
      label: 'Ver repositório',
    },
    {
      id: '05',
      category: 'Inteligência artificial',
      title: 'CNN Heatmap Analysis',
      description:
        'Inteligência artificial explicável para interpretar modelos de análise de imagens médicas, no contexto da pesquisa sobre Alzheimer.',
      techs: ['Python', 'TensorFlow', 'OpenCV', 'XAI'],
      visual: 'heatmap',
      diagram: ['IMAGEM MÉDICA', 'CNN', 'HEATMAP / XAI'],
      url: 'https://github.com/TonnyThe2nd/CnnHeatmapAnalysis',
      label: 'Ver repositório',
    },
    {
      id: '06',
      category: 'Inteligência artificial',
      title: 'Visão computacional em tempo real',
      description:
        'Exploração de rastreamento de mãos e interação por gestos com processamento de vídeo, MediaPipe e OpenCV.',
      techs: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      visual: 'vision',
      diagram: ['VÍDEO', 'MEDIAPIPE', 'RASTREAMENTO'],
      url: 'https://github.com/TonnyThe2nd/Hand-Detector-with-Drawing-Sensor',
      label: 'Ver repositório',
    },
    {
      id: '07',
      category: 'Back-end',
      title: 'E-commerce com microsserviços',
      description:
        'Plataforma com serviços em .NET e comunicação assíncrona via Kafka. Arquitetura orientada a eventos para conectar os fluxos do e-commerce.',
      techs: ['.NET', 'Kafka', 'SQL Server', 'Docker'],
      visual: 'events',
      diagram: ['API / .NET', 'APACHE KAFKA', 'MICROSSERVIÇOS'],
      url: '',
      label: '',
    },
    {
      id: '08',
      category: 'Inteligência artificial',
      title: 'IA distribuída com RabbitMQ',
      description:
        'Classificação de imagens com CNNs e processamento assíncrono. Workers escaláveis conectam os modelos de IA à aplicação web.',
      techs: ['TensorFlow', 'RabbitMQ', 'Angular', '.NET'],
      visual: 'network',
      diagram: ['IMAGEM', 'RABBITMQ', 'CNN / WORKERS'],
      url: '',
      label: '',
    },
  ];
  get visibleProjects() {
    return this.projects.filter(
      (project) =>
        this.selected === 'Todos' || project.category === this.selected,
    );
  }
}
