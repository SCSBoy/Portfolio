import { AfterViewInit, Component, signal, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RevealDirective } from '../../shared/reveal.directive';
import { I18nService } from '../../shared/i18n.service';
import { TranslationKey } from '../../data/translations.data';

interface SkillItem {
  name: string;
  icon: string;
  level: { en: string; fr: string };
  projects: { en: string; fr: string };
}

interface SkillGroup {
  category: TranslationKey;
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
        { name: 'Angular', icon: 'devicon-angular-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Used at ORABANK-TOGO for banking reconciliation and change request workflow web applications.', fr: 'Utilisé à ORABANK-TOGO pour les applications web de rapprochements bancaires et de workflow de fiches de changement.' } },
        { name: 'TypeScript', icon: 'devicon-typescript-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Typed Angular front-end logic for ORABANK projects and this portfolio.', fr: 'Logique front-end Angular typée pour les projets ORABANK et ce portfolio.' } },
        { name: 'JavaScript', icon: 'devicon-javascript-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Interactive interfaces, animations and technical problem solving across portfolio and internship work.', fr: 'Interfaces interactives, animations et résolution de problèmes techniques sur le portfolio et les stages.' } },
        { name: 'React', icon: 'devicon-react-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Front-end practice alongside Angular, with reusable components and responsive UI work.', fr: 'Pratique front-end complémentaire à Angular, avec composants réutilisables et interfaces responsives.' } },
      ],
    },
    {
      category: 'skills.category.backend',
      icon: 'dns',
      items: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'API and tooling practice for web application back ends.', fr: 'Pratique des API et outils côté back-end pour applications web.' } },
        { name: 'Spring Boot', icon: 'devicon-spring-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Back-end technology used for ORABANK banking reconciliation and approval workflow applications.', fr: 'Technologie back-end utilisée pour les applications ORABANK de rapprochements bancaires et de workflow d\'approbation.' } },
        { name: 'Java', icon: 'devicon-java-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Core language behind Spring Boot work and academic software engineering projects.', fr: 'Langage principal derrière Spring Boot et les projets académiques de génie logiciel.' } },
      ],
    },
    {
      category: 'skills.category.database',
      icon: 'storage',
      items: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Relational database design for structured business workflows and web application back ends.', fr: 'Conception de bases relationnelles pour workflows métier structurés et back-ends web.' } },
        { name: 'MySQL', icon: 'devicon-mysql-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Academic and web development database practice during the computer engineering curriculum.', fr: 'Pratique base de données en projets académiques et web durant le parcours informatique.' } },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: { en: 'Basics / Learning', fr: 'Notions / En apprentissage' }, projects: { en: 'NoSQL exploration connected to the AI and Big Data master\'s path.', fr: 'Exploration NoSQL liée au parcours Master en IA et Big Data.' } },
      ],
    },
    {
      category: 'skills.category.tools',
      icon: 'construction',
      items: [
        { name: 'Git', icon: 'devicon-git-plain', level: { en: 'Mastered / Advanced', fr: 'Maîtrisé / Avancé' }, projects: { en: 'Versioning for portfolio work, academic projects and internship application development.', fr: 'Versioning pour le portfolio, les projets académiques et les développements réalisés en stage.' } },
        { name: 'Docker', icon: 'devicon-docker-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'Environment setup practice for APIs, databases and full-stack applications.', fr: 'Mise en place d\'environnements pour API, bases de données et applications full-stack.' } },
        { name: 'Figma', icon: 'devicon-figma-plain', level: { en: 'Intermediate / Practiced', fr: 'Intermédiaire / Pratiqué' }, projects: { en: 'UI preparation and layout thinking for portfolio and web application screens.', fr: 'Préparation UI et réflexion sur les écrans du portfolio et des applications web.' } },
      ],
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.revealed.set(true), 150);
  }
}
