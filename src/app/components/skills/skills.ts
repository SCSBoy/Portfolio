import { AfterViewInit, Component, signal, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RevealDirective } from '../../shared/reveal.directive';
import { I18nService } from '../../shared/i18n.service';
import { TRANSLATIONS } from '../../data/translations.data';

interface SkillItem {
  name: string;
  icon: string;
  level: { en: string; fr: string };
  projects: { en: string; fr: string };
}

interface SkillGroup {
  category: keyof typeof TRANSLATIONS['en'];
  icon: string;
  items: SkillItem[];
}

@Component({
  selector: 'app-skills',
  imports: [MatIconModule, MatTooltipModule, RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  protected readonly revealed = signal(false);
  protected readonly isOpen = signal(false);
  protected readonly i18n = inject(I18nService);

  protected toggleOpen(): void {
    this.isOpen.update(v => !v);
  }

  protected readonly groups: SkillGroup[] = [
    {
      category: 'skills.category.frontend',
      icon: 'web',
      items: [
        { name: 'Angular', icon: 'devicon-angular-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: Portfolio, KPI Dashboard, E-commerce app', fr: 'Projets: Portfolio, Dashboard KPI, E-commerce app' } },
        { name: 'TypeScript', icon: 'devicon-typescript-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: All recent frontend projects', fr: 'Projets: Tous les projets frontend récents' } },
        { name: 'JavaScript', icon: 'devicon-javascript-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: GSAP animations, Utility scripts', fr: 'Projets: Animations GSAP, Scripts utilitaires' } },
        { name: 'HTML5/Sass', icon: 'devicon-html5-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: Design systems, Pixel-perfect integration', fr: 'Projets: Design systems, Intégration pixel-perfect' } },
      ],
    },
    {
      category: 'skills.category.backend',
      icon: 'dns',
      items: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Projects: RESTful APIs, Automation scripts', fr: 'Projets: API RESTful, Scripts d\'automatisation' } },
        { name: 'Spring Boot', icon: 'devicon-spring-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: Banking microservices, E-commerce backend', fr: 'Projets: Microservices bancaires, Backend e-commerce' } },
        { name: 'Java', icon: 'devicon-java-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: Algorithms, Academic projects', fr: 'Projets: Algorithmique, Projets académiques' } },
        { name: 'Python', icon: 'devicon-python-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Projects: Data scripts, AI models', fr: 'Projets: Scripts Data, Modèles IA' } },
      ],
    },
    {
      category: 'skills.category.database',
      icon: 'storage',
      items: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: Main backend, Complex queries', fr: 'Projets: Backend principal, Requêtes complexes' } },
        { name: 'MySQL', icon: 'devicon-mysql-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Projects: Legacy systems, Personal projects', fr: 'Projets: Systèmes legacy, Projets personnels' } },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: { en: 'Basics / Learning', fr: 'Notions / En apprentissage' }, projects: { en: 'Projects: Proof of concepts (PoC)', fr: 'Projets: Proof of concepts (PoC)' } },
      ],
    },
    {
      category: 'skills.category.tools',
      icon: 'construction',
      items: [
        { name: 'Git', icon: 'devicon-git-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Projects: Daily versioning, CI/CD', fr: 'Projets: Versioning quotidien, CI/CD' } },
        { name: 'Docker', icon: 'devicon-docker-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Projects: Database and API containerization', fr: 'Projets: Conteneurisation de bases de données et API' } },
        { name: 'Figma', icon: 'devicon-figma-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Projects: UI/UX mockups, Design systems', fr: 'Projets: Maquettage UI/UX, Design systems' } },
        { name: 'Jest', icon: 'devicon-jest-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Projects: Frontend unit testing', fr: 'Projets: Tests unitaires frontend' } },
      ],
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.revealed.set(true), 150);
  }
}
