export interface Bilingual {
  en: string;
  fr: string;
}

export interface Project {
  slug: string;
  title: string;
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
    title: 'AutomaticRFC',
    summary: {
      en: 'Business workflow management platform with JWT authentication, role and permission management, built with Spring Boot.',
      fr: "Plateforme de gestion de workflows métier avec authentification JWT, gestion des rôles et permissions, construite avec Spring Boot.",
    },
    description: [
      {
        en: 'AutomaticRFC is an internal platform designed to digitize and streamline the management of change requests (Request For Change) within an organization.',
        fr: "AutomaticRFC est une plateforme interne pensée pour digitaliser et fluidifier la gestion des demandes de changement (Request For Change) au sein d'une organisation.",
      },
      {
        en: "It covers the entire lifecycle of a request: creation, validation through a configurable approval workflow, progress tracking, and archiving, with full traceability of all actions performed.",
        fr: "Elle couvre l'ensemble du cycle de vie d'une demande : création, validation par un circuit d'approbation configurable, suivi de l'état d'avancement et archivage, avec une traçabilité complète des actions effectuées.",
      },
      {
        en: "Special attention was paid to security (JWT token authentication, role- and permission-based access control) as well as data reliability through automatic entity auditing.",
        fr: "L'accent a été mis sur la sécurité (authentification par jetons JWT, contrôle d'accès basé sur les rôles et permissions) ainsi que sur la fiabilité des données grâce à un audit automatique des entités.",
      },
    ],
    role: { en: 'Full-Stack Developer', fr: 'Développeur Full-Stack' },
    duration: { en: '4 months', fr: '4 mois' },
    tags: ['Spring Boot', 'JWT', 'PostgreSQL', 'Spring Security'],
    features: [
      { en: 'Secure JWT authentication with session refresh', fr: 'Authentification sécurisée par jetons JWT avec rafraîchissement de session' },
      { en: 'Fine-grained role and permission management per module', fr: 'Gestion fine des rôles et permissions par module' },
      { en: 'Configurable request approval workflow', fr: "Circuit de validation des demandes configurable" },
      { en: 'Automatic audit of creations and modifications (JPA Auditing)', fr: "Audit automatique des créations et modifications (JPA Auditing)" },
    ],
    codeUrl: '#',
    gradient: 'linear-gradient(135deg, #00256F 0%, #0054DD 60%, #0380E5 100%)',
  },
  {
    slug: 'portfolio-personnel',
    title: 'Personal Portfolio',
    summary: {
      en: 'Responsive showcase website presenting my journey and achievements, built with Angular and Angular Material.',
      fr: 'Site vitrine responsive présentant mon parcours et mes réalisations, développé avec Angular et Angular Material.',
    },
    description: [
      {
        en: 'This portfolio highlights my journey, skills, and projects through a modern, fluid, and fully responsive interface.',
        fr: "Ce portfolio met en avant mon parcours, mes compétences et mes projets à travers une interface moderne, fluide et entièrement responsive.",
      },
      {
        en: "It was built with Angular in a 100% standalone, zoneless architecture, and relies on Angular Material for UI components.",
        fr: "Il a été construit avec Angular en architecture 100% standalone et zoneless, et s'appuie sur Angular Material pour les composants d'interface.",
      },
      {
        en: "The experience is enriched with scroll animations, micro-interactions, and smooth anchor navigation between sections.",
        fr: "L'expérience est enrichie par des animations au défilement, des micro-interactions et une navigation par ancre fluide entre les sections.",
      },
    ],
    role: { en: 'Frontend Developer', fr: 'Développeur Frontend' },
    duration: { en: 'Ongoing', fr: 'En continu' },
    tags: ['Angular', 'Angular Material', 'SCSS', 'ScrollReveal'],
    features: [
      { en: 'Smooth navigation with active section highlighting', fr: 'Navigation fluide avec mise en évidence de la section active' },
      { en: 'Scroll animations and micro-interactions', fr: 'Animations au défilement et micro-interactions' },
      { en: 'Dedicated detail page for each project', fr: "Page de détail dédiée à chaque projet" },
      { en: 'Contact form with real-time validation', fr: 'Formulaire de contact avec validation en temps réel' },
    ],
    demoUrl: '#',
    codeUrl: '#',
    gradient: 'linear-gradient(135deg, #000A29 0%, #0054DD 55%, #03AFF9 100%)',
  },
  {
    slug: 'analyse-donnees-iot',
    title: 'IoT Data Analysis',
    summary: {
      en: 'Notebook analyzing IoT sensor quality: data processing, anomaly detection, and redundancy strategy.',
      fr: "Notebook d'analyse de la qualité de capteurs IoT : traitement des données, détection d'anomalies et stratégie de redondance.",
    },
    description: [
      {
        en: 'This project analyzes data streams from IoT sensors in order to evaluate their quality and reliability over time.',
        fr: "Ce projet consiste en l'analyse de flux de données issues de capteurs IoT afin d'en évaluer la qualité et la fiabilité dans le temps.",
      },
      {
        en: "Processing includes raw data cleaning, anomaly and outlier detection, as well as a study of sensor redundancy to improve the robustness of the measurement system.",
        fr: "Le traitement inclut le nettoyage des données brutes, la détection d'anomalies et de valeurs aberrantes, ainsi que l'étude de la redondance des capteurs pour améliorer la robustesse du système de mesure.",
      },
      {
        en: "Results are presented as a documented Jupyter notebook, with visualizations that make the observed trends easier to interpret.",
        fr: "Les résultats sont présentés sous forme de notebook Jupyter documenté, avec des visualisations facilitant l'interprétation des tendances observées.",
      },
    ],
    role: { en: 'Data Analyst', fr: 'Data Analyst' },
    duration: { en: '3 weeks', fr: '3 semaines' },
    tags: ['Python', 'Jupyter', 'Pandas', 'Data Analysis'],
    features: [
      { en: 'Cleaning and normalization of sensor time series', fr: 'Nettoyage et normalisation des séries temporelles de capteurs' },
      { en: 'Anomaly and outlier detection', fr: "Détection d'anomalies et de valeurs aberrantes" },
      { en: 'Sensor redundancy strategy study', fr: 'Étude de stratégie de redondance des capteurs' },
      { en: 'Visualizations for trend interpretation', fr: 'Visualisations pour l’interprétation des tendances' },
    ],
    codeUrl: '#',
    gradient: 'linear-gradient(135deg, #001232 0%, #0380E5 60%, #5FE4FD 100%)',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
