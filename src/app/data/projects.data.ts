export interface Bilingual {
  en: string;
  fr: string;
}

export interface Project {
  slug: string;
  title: Bilingual;
  summary: Bilingual;
  description: Bilingual[];
  role: Bilingual;
  duration: Bilingual;
  tags: string[];
  features: Bilingual[];
  demoUrl?: string;
  codeUrl?: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'automatic-rfc',
    title: {
      fr :'Automatic-RFC',
      en : 'Automatic-RFC'
    },
    summary: {
      en: 'Web application for automating change request forms with a configurable approval workflow.',
      fr: "Application web d'automatisation de la création de fiches de changement avec un workflow d'approbation paramétrable.",
    },
    description: [
      {
        en: 'AutomaticRFC was developed during my software development internship at ORABANK-TOGO from May 2025 to August 2025.',
        fr: "AutomaticRFC a été développé pendant mon stage en programmation logiciel à ORABANK-TOGO, de mai 2025 à août 2025.",
      },
      {
        en: 'The goal was to digitize the creation and monitoring of change request forms while making the approval circuit adaptable to internal processes.',
        fr: "L'objectif était de digitaliser la création et le suivi des fiches de changement tout en rendant le circuit d'approbation adaptable aux processus internes.",
      },
      {
        en: 'The platform focuses on traceability, validation steps, role-based access and a clear workflow for request handling.',
        fr: "La plateforme met l'accent sur la traçabilité, les étapes de validation, les accès par rôle et un workflow clair de traitement des demandes.",
      },
    ],
    role: { en: 'Software Developer', fr: 'Développeur logiciel' },
    duration: { en: 'May 2025 - August 2025', fr: 'Mai 2025 - Août 2025' },
    tags: ['Angular', 'Spring Boot', 'Workflow', 'Approval'],
    features: [
      { en: 'Automated creation of change request forms', fr: 'Création automatisée de fiches de changement' },
      { en: 'Configurable approval workflow', fr: "Workflow d'approbation paramétrable" },
      { en: 'Request tracking across validation steps', fr: 'Suivi des demandes à travers les étapes de validation' },
      { en: 'Role-oriented access to the workflow', fr: 'Accès orienté rôles au workflow' },
    ],
    gradient: 'linear-gradient(135deg, #00256F 0%, #0054DD 60%, #0380E5 100%)',
  },
  {
    slug: 'rapprochements-bancaires',
    title: {
      fr :'Rapprochements Bancaires',
      en : 'Banking reconciliation'
    },
    summary: {
      en: 'Bank reconciliation web application built with Angular and Spring Boot during an internship at ORABANK-TOGO.',
      fr: "Application web de rapprochements bancaires développée avec Angular et Spring Boot pendant un stage à ORABANK-TOGO.",
    },
    description: [
      {
        en: 'This project was completed during my software development internship at ORABANK-TOGO from July 2024 to August 2024.',
        fr: "Ce projet a été réalisé pendant mon stage en programmation logiciel à ORABANK-TOGO, de juillet 2024 à août 2024.",
      },
      {
        en: 'The application helps compare, organize and follow banking reconciliation data through a dedicated web interface.',
        fr: "L'application aide à comparer, organiser et suivre les données de rapprochement bancaire à travers une interface web dédiée.",
      },
      {
        en: 'The frontend was built with Angular while Spring Boot handled the backend logic and API layer.',
        fr: "Le frontend a été développé avec Angular tandis que Spring Boot gérait la logique backend et la couche API.",
      },
    ],
    role: { en: 'Software Developer', fr: 'Développeur logiciel' },
    duration: { en: 'July 2024 - August 2024', fr: 'Juillet 2024 - Août 2024' },
    tags: ['Angular', 'Spring Boot', 'REST API', 'Banking'],
    features: [
      { en: 'Banking reconciliation data management', fr: 'Gestion des données de rapprochement bancaire' },
      { en: 'Angular web interface for users', fr: 'Interface web Angular pour les utilisateurs' },
      { en: 'Spring Boot backend services', fr: 'Services backend avec Spring Boot' },
      { en: 'Structured workflow for reconciliation operations', fr: 'Parcours structuré pour les opérations de rapprochement' },
    ],
    gradient: 'linear-gradient(135deg, #000A29 0%, #0054DD 55%, #03AFF9 100%)',
  },
  {
    slug: 'pensees-affectueuses',
    title: {
      fr :'Pensees-affectueuses',
      en : 'Loving thoughts'
    },
    summary: {
      en: 'A React application for writing and dedicating affectionate messages to people you love.',
      fr: 'Une application React pour écrire et dédier des messages affectueux aux personnes que vous aimez.',
    },
    description: [
      {
        en: 'Pensées affectueuses started in February 2026 as a first version centered on the Valentine’s Day theme.',
        fr: "Pensées affectueuses a démarré en février 2026 avec une première version autour du thème de la Saint-Valentin.",
      },
      {
        en: 'The application lets users compose a message and dedicate it to someone important to them through a soft, emotional interface.',
        fr: "L'application permet de composer un message et de le dédier à une personne importante à travers une interface douce et émotionnelle.",
      },
      {
        en: 'It is designed to evolve beyond Valentine’s Day with new themes, improvements and richer sharing experiences.',
        fr: "Elle est pensée pour évoluer au-delà de la Saint-Valentin avec de nouveaux thèmes, des améliorations et des expériences de partage plus riches.",
      },
    ],
    role: { en: 'Frontend Developer', fr: 'Développeur Frontend' },
    duration: { en: 'February 2026', fr: "Février 2026" },
    tags: ['React', 'GitHub', 'UI Design', 'Responsive'],
    features: [
      { en: 'Personalized affectionate message creation', fr: 'Création de messages affectueux personnalisés' },
      { en: 'First theme inspired by Valentine’s Day', fr: 'Premier thème inspiré de la Saint-Valentin' },
      { en: 'Responsive interface for mobile usage', fr: 'Interface responsive adaptée au mobile' },
      { en: 'Evolution planned with multiple improvements', fr: 'Évolution prévue avec plusieurs améliorations' },
    ],
    codeUrl: 'https://github.com/SCSBoy/lovingThoughts',
    demoUrl: 'https://scsboy.github.io/lovingThoughts/',
    gradient: 'linear-gradient(135deg, #7A113A 0%, #E94B8B 55%, #FFD1DC 100%)',
  },
  {
    slug: 'gestion-stock',
    title: {
      fr :'Gestion Stock',
      en : 'Inventory Management'
    },
    summary: {
      en: 'Inventory management application associated with a project for JURINABE SARL, built with Angular Material and Laravel.',
      fr: "Application de gestion de stock associée à un projet réalisé pour JURINABE SARL, développée avec Angular Material et Laravel.",
    },
    description: [
      {
        en: 'Gestion Stock started in September 2025 as a project associated to a JURINABE SARL project.',
        fr: "Gestion Stock a démarré en septembre 2025 comme projet associé à un projet pour JURINABE SARL.",
      },
      {
        en: 'The application is designed to help manage products, stock movements and operational monitoring from a structured dashboard.',
        fr: "L'application vise à faciliter la gestion des produits, des mouvements de stock et du suivi opérationnel depuis un tableau de bord structuré.",
      },
      {
        en: 'Angular Material provides the user interface while Laravel supports the backend and data management layer.',
        fr: "Angular Material fournit l'interface utilisateur tandis que Laravel soutient la couche backend et la gestion des données.",
      },
    ],
    role: { en: 'Full-Stack Developer', fr: 'Développeur Full-Stack' },
    duration: { en: 'September 2025 - December 2025', fr: "Septembre 2025 - Decembre 2025" },
    tags: ['Angular Material', 'Laravel', 'Dashboard', 'Inventory'],
    features: [
      { en: 'Product and stock item management', fr: 'Gestion des produits et articles en stock' },
      { en: 'Inventory movement tracking', fr: 'Suivi des mouvements de stock' },
      { en: 'Dashboard-oriented interface', fr: 'Interface orientée tableau de bord' },
      { en: 'Backend data management with Laravel', fr: 'Gestion des données backend avec Laravel' },
    ],
    gradient: 'linear-gradient(135deg, #12343B 0%, #2D8C7A 58%, #C7F2A4 100%)',
  },
  {
    slug: 'traducteur-multilingue-vocal',
    title: {
      fr :'Traducteur Multilingue Vocal',
      en : 'Automatic and voice translation'
    },
    summary: {
      en: 'Automatic and voice translation system for French, English and Ewe using NLP and machine learning.',
      fr: "Système de traduction automatique et vocale pour le français, l'anglais et l'ewe avec NLP et machine learning.",
    },
    description: [
      {
        en: 'This project aims to build a multilingual translator that supports French, English and Ewe, a local language spoken in Togo.',
        fr: "Ce projet vise à développer un traducteur multilingue prenant en charge le français, l'anglais et l'ewe, une langue locale du Togo.",
      },
      {
        en: 'The system combines automatic text translation with voice recognition so users can translate spoken or written input.',
        fr: "Le système combine la traduction automatique de texte et la reconnaissance vocale afin de traduire des entrées écrites ou parlées.",
      },
      {
        en: 'It relies on Natural Language Processing and machine learning techniques to improve language understanding, especially for a local-language use case with fewer digital resources.',
        fr: "Il s'appuie sur des techniques de Natural Language Processing et de machine learning pour améliorer la compréhension linguistique, notamment dans le cas d'une langue locale disposant de moins de ressources numériques.",
      },
    ],
    role: { en: 'NLP / Machine Learning Developer', fr: 'Développeur NLP / Machine Learning' },
    duration: { en: 'Academic project', fr: 'Projet académique' },
    tags: ['NLP', 'Machine Learning', 'Speech Recognition', 'French', 'English', 'Ewe'],
    features: [
      { en: 'Translation between French, English and Ewe', fr: "Traduction entre le français, l'anglais et l'ewe" },
      { en: 'Voice input through speech recognition', fr: 'Entrée vocale via reconnaissance de la parole' },
      { en: 'Natural Language Processing pipeline', fr: 'Pipeline de traitement automatique du langage naturel' },
      { en: 'Machine learning approach for multilingual translation', fr: 'Approche machine learning pour la traduction multilingue' },
    ],
    codeUrl : 'https://github.com/CharlyEKLU/ewe-multilingual-translator_frontend_Angular',
    demoUrl : 'https://ewe-multilingual-translator-fronten.vercel.app/',
    gradient: 'linear-gradient(135deg, #25113D 0%, #6B46C1 52%, #38BDF8 100%)',
  },
  {
    slug: 'portfolio-personnel',
    title: {
      fr : 'Portfolio Personnel',
      en : 'Personal Portfolio'
    },
    summary: {
      en: 'Responsive personal portfolio presenting my journey, skills, projects and contact information.',
      fr: 'Portfolio personnel responsive présentant mon parcours, mes compétences, mes projets et mes informations de contact.',
    },
    description: [
      {
        en: 'This portfolio was designed to present my profile as a developer through a modern and interactive web experience.',
        fr: "Ce portfolio a été conçu pour présenter mon profil de développeur à travers une expérience web moderne et interactive.",
      },
      {
        en: 'It brings together my professional experience, academic background, certifications, technical skills and selected projects in one structured interface.',
        fr: "Il regroupe mes expériences professionnelles, mon parcours académique, mes certifications, mes compétences techniques et mes projets dans une interface structurée.",
      },
      {
        en: 'The application uses Angular, Angular Material, SCSS, animations and a dedicated project detail system to make the content clear and pleasant to explore.',
        fr: "L'application utilise Angular, Angular Material, SCSS, des animations et un système de pages détail pour rendre le contenu clair et agréable à explorer.",
      },
    ],
    role: { en: 'Frontend Developer', fr: 'Développeur Frontend' },
    duration: { en: 'Personal project', fr: 'Projet personnel' },
    tags: ['Angular', 'Angular Material', 'SCSS', 'Three.js'],
    features: [
      { en: 'Responsive presentation of the developer profile', fr: 'Présentation responsive du profil développeur' },
      { en: 'Sections for journey, skills, projects and contact', fr: 'Sections pour le parcours, les compétences, les projets et le contact' },
      { en: 'Interactive project showcase with detail pages', fr: 'Présentation interactive des projets avec pages détail' },
      { en: 'Bilingual interface support', fr: 'Support d’interface bilingue' },
    ],
    codeUrl : 'https://github.com/SCSBoy/Portfolio/tree/main',
    demoUrl : 'https://portfolio-tawny-ten-68.vercel.app/',
    gradient: 'linear-gradient(135deg, #000A29 0%, #0054DD 55%, #03AFF9 100%)',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
