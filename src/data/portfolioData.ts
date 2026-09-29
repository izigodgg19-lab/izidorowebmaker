import { Project, ServiceItem, StepItem, TechCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Izidoro Geovane',
  title: 'Desenvolvedor de Sistemas e Aplicações Web',
  shortDescription:
    'Desenvolvo sistemas, aplicações web, landing pages e soluções digitais personalizadas para transformar ideias em produtos funcionais.',
  about:
    'Sou Izidoro Geovane, profissional com experiência em desenvolvimento de soluções digitais, sistemas web e aplicações voltadas para diferentes necessidades de negócios.\n\nMeu trabalho envolve transformar ideias em produtos digitais funcionais, combinando desenvolvimento, automação, organização de dados e experiência do usuário.\n\nTenho interesse especialmente na criação de sistemas personalizados, dashboards, ferramentas de gestão, aplicações web, landing pages e soluções digitais que possam facilitar processos e gerar valor para empresas e profissionais.',
  whatsappNumber: '5511969575378',
  whatsappDisplay: '+55 (11) 96957-5378',
  instagramHandle: 'izigod_',
  instagramUrl: 'https://www.instagram.com/izigod_/',
};

export const HIGHLIGHT_SKILLS = [
  'Desenvolvimento de sistemas',
  'Aplicações web',
  'Landing pages',
  'Automação de processos',
  'Ferramentas administrativas',
  'Sistemas de gestão',
  'Interfaces responsivas',
  'Integração com bancos de dados',
  'Criação de soluções personalizadas',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'sistemas-web',
    title: 'Sistemas Web',
    description:
      'Sistemas personalizados para gerenciamento, organização e automatização de processos.',
    iconName: 'LayoutGrid',
    deliverables: ['Módulos integrados', 'Painéis administrativos', 'Fluxos sob medida'],
  },
  {
    id: 'aplicacoes-web',
    title: 'Aplicações Web',
    description:
      'Aplicações acessíveis pelo navegador, com interfaces modernas e responsivas.',
    iconName: 'AppWindow',
    deliverables: ['Experiência fluida', 'Multiplataforma', 'Performance otimizada'],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description:
      'Páginas profissionais desenvolvidas para apresentação de empresas, profissionais, serviços e produtos.',
    iconName: 'Sparkles',
    deliverables: ['Alta conversão', 'Design moderno', 'Identidade profissional'],
  },
  {
    id: 'sistemas-gestao',
    title: 'Sistemas de Gestão',
    description:
      'Ferramentas para organizar tarefas, informações, processos e operações.',
    iconName: 'Briefcase',
    deliverables: ['Organização de dados', 'Visão operacional', 'Controle centralizado'],
  },
  {
    id: 'automacao',
    title: 'Automação',
    description:
      'Soluções digitais para reduzir tarefas manuais e melhorar processos.',
    iconName: 'Cpu',
    deliverables: ['Otimização de tempo', 'Menos retrabalho', 'Processamento ágil'],
  },
  {
    id: 'solucoes-personalizadas',
    title: 'Soluções Personalizadas',
    description:
      'Projetos desenvolvidos de acordo com a necessidade específica de cada cliente.',
    iconName: 'Wrench',
    deliverables: ['Arquitetura dedicada', 'Escalabilidade', 'Foco no seu objetivo'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'carla-augusta',
    name: 'Dra. Carla Augusta',
    category: 'Landing Page / Site Profissional',
    categoryFilter: 'landing',
    description:
      'Site profissional desenvolvido para apresentação de uma cirurgiã-dentista, seus serviços, locais de atendimento, informações profissionais, depoimentos de clientes e canais de contato.',
    additionalNote:
      'O site apresenta a Dra. Carla Augusta como cirurgiã-dentista em São Paulo e possui informações de atendimento e contato.',
    url: 'https://www.dracarlaaugusta.com.br/',
    buttonLabel: 'Visitar projeto',
    image: '/src/assets/images/project_dental_carla_1790650434175.jpg',
    tags: ['Site Profissional', 'Odontologia', 'Landing Page', 'Responsivo'],
    features: ['Apresentação de serviços', 'Locais de atendimento', 'Depoimentos', 'Canais de contato'],
  },
  {
    id: 'taskflow',
    name: 'TaskFlow',
    category: 'SaaS / Gestão de tarefas / Kanban',
    categoryFilter: 'systems',
    description:
      'Sistema web de gerenciamento de tarefas baseado em organização de trabalho e metodologia Kanban, desenvolvido para ajudar usuários a organizar atividades, acompanhar processos e visualizar o andamento de seus trabalhos.',
    additionalNote:
      'TaskFlow — Organize seu trabalho. Conquiste seus objetivos.',
    url: 'https://saas-kanban-xi.vercel.app/login',
    buttonLabel: 'Acessar sistema',
    image: '/src/assets/images/project_taskflow_kanban_1790650444340.jpg',
    tags: ['SaaS', 'Metodologia Kanban', 'Gestão de Tarefas', 'Sistema Web'],
    features: ['Quadro Kanban', 'Fluxo de trabalho visual', 'Autenticação', 'Acompanhamento de processos'],
  },
  {
    id: 'agendamentos-massagem',
    name: 'Sistema de Agendamentos de Massagem',
    category: 'Sistema Web / Agendamento',
    categoryFilter: 'systems',
    description:
      'Aplicação web voltada para gerenciamento e organização de agendamentos de serviços de massagem, demonstrando a criação de uma solução digital direcionada a uma necessidade específica de negócio.',
    url: 'https://izigods-project-pn5m.vercel.app/',
    buttonLabel: 'Visitar projeto',
    image: '/src/assets/images/project_booking_massage_1790650455413.jpg',
    tags: ['Sistema Web', 'Agendamento Online', 'Organização de Horários', 'Interface Intuitiva'],
    features: ['Gestão de horários', 'Seleção de procedimentos', 'Interface amigável', 'Fluxo de reserva'],
  },
  {
    id: 'buffet-montello',
    name: 'Buffet Montello',
    category: 'Site Institucional / Landing Page',
    categoryFilter: 'landing',
    description:
      'Projeto digital desenvolvido para apresentação de um negócio do segmento de eventos e buffet, com foco em presença digital, apresentação dos serviços e comunicação com potenciais clientes.',
    url: 'https://buffetmontello.com.br/inicio/',
    buttonLabel: 'Visitar projeto',
    image: '/src/assets/images/project_buffet_montello_1790650466863.jpg',
    tags: ['Site Institucional', 'Eventos & Buffet', 'Presença Digital', 'Design Elegante'],
    features: ['Catálogo de serviços para eventos', 'Galeria de recepções', 'Formas de contato'],
  },
  {
    id: 'suporte-emocional',
    name: 'Suporte Emocional & Motivacional',
    category: 'Landing Page / Serviço Digital',
    categoryFilter: 'landing',
    description:
      'Página desenvolvida para apresentar um serviço de suporte, escuta, acolhimento e companhia, utilizando uma comunicação direcionada ao usuário e uma apresentação clara da proposta do serviço.',
    url: 'https://s-e-m-uue5.vercel.app/',
    buttonLabel: 'Visitar projeto',
    tags: ['Landing Page', 'Serviço Digital', 'Acolhimento', 'Design Humanizado'],
    features: ['Comunicação direcionada', 'Apresentação clara da proposta', 'Canais de escuta e acolhimento'],
  },
  {
    id: 'izigod',
    name: 'IziGod',
    category: 'Aplicação Web',
    categoryFilter: 'apps',
    description:
      'Aplicação web desenvolvida como demonstração de uma solução digital criada utilizando ferramentas modernas de desenvolvimento.',
    url: 'https://izigod.vercel.app/',
    buttonLabel: 'Visitar projeto',
    tags: ['Aplicação Web', 'Modern Stack', 'Interface Dinâmica', 'Solução Digital'],
    features: ['Componentização moderna', 'Arquitetura reativa', 'Demonstração prática'],
  },
];

export const WORK_PROCESS: StepItem[] = [
  {
    step: '01',
    title: 'Entendimento',
    description: 'Compreender a necessidade, problema ou ideia do projeto.',
    details: 'Alinhamento detalhado dos objetivos, público-alvo e requisitos essenciais do negócio.',
  },
  {
    step: '02',
    title: 'Planejamento',
    description: 'Definir estrutura, funcionalidades, fluxo e experiência do usuário.',
    details: 'Mapeamento da arquitetura da informação, telas e fluxos com foco em simplicidade.',
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description: 'Construir a aplicação, interface e funcionalidades necessárias.',
    details: 'Código limpo, responsividade rigorosa e integração com recursos e dados.',
  },
  {
    step: '04',
    title: 'Publicação',
    description: 'Testar, ajustar e disponibilizar a solução para utilização.',
    details: 'Testes de usabilidade, otimização de performance e deploy em ambiente seguro.',
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Front-end',
    description: 'Interfaces modernas, responsivas e de alta performance no navegador.',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 & CSS3' },
    ],
  },
  {
    title: 'Back-end & APIs',
    description: 'Lógica de negócios, processamento de dados e comunicação estruturada.',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Bancos de Dados',
    description: 'Modelagem, persistência segura e estruturação de informações.',
    items: [
      { name: 'PostgreSQL' },
      { name: 'Bancos Relacionais' },
      { name: 'Modelagem de Dados' },
    ],
  },
  {
    title: 'Deploy & Ferramentas',
    description: 'Controle de versão, integração contínua e publicação em nuvem.',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Vercel' },
    ],
  },
  {
    title: 'Desenvolvimento de Sistemas',
    description: 'Soluções corporativas completas orientadas a regras de negócio.',
    items: [
      { name: 'Sistemas Web' },
      { name: 'Dashboards & Métricas' },
      { name: 'Painéis Administrativos' },
      { name: 'Metodologias Ágeis / Kanban' },
    ],
  },
  {
    title: 'Automação & Processos',
    description: 'Otimização de tarefas manuais e integração entre fluxos digitais.',
    items: [
      { name: 'Fluxos Automatizados' },
      { name: 'Validação de Formulários' },
      { name: 'Padronização de Processos' },
    ],
  },
];

export const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Personalização',
    description: 'Cada projeto pode ser desenvolvido de acordo com a necessidade específica.',
    subtext: 'Sem estruturas engessadas: a solução se molda aos objetivos reais da sua operação.',
  },
  {
    number: '02',
    title: 'Experiência',
    description: 'Interfaces pensadas para serem claras, modernas e responsivas.',
    subtext: 'Navegação fluida e intuitiva tanto em computadores quanto em tablets e smartphones.',
  },
  {
    number: '03',
    title: 'Funcionalidade',
    description: 'Soluções construídas para resolver problemas reais e facilitar processos.',
    subtext: 'Foco na utilidade prática que gera economia de tempo e eficiência diária.',
  },
];
