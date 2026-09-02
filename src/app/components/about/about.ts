import { Component, signal, computed, inject } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RevealDirective } from '../../shared/reveal.directive';
import { I18nService } from '../../shared/i18n.service';

interface Highlight {
  icon: string;
  value: string;
  label: { en: string; fr: string };
}

interface Testimonial { 
  name: string;
  role: { en: string; fr: string };
  text: { en: string; fr: string };
  avatar: string;
}

type ProfileMode = 'fullstack' | 'data' | 'autres';

@Component({
  selector: 'app-about',
  imports: [MatIconModule, MatCardModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [
    trigger('flipList', [
      transition('* => *', [
        query(':enter', [
          style({ transform: 'perspective(600px) rotateY(-90deg)', opacity: 0 }),
          stagger(100, [
            animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', 
              style({ transform: 'perspective(600px) rotateY(0)', opacity: 1 })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class About {
  public readonly currentMode = signal<ProfileMode>('fullstack');
  protected readonly i18n = inject(I18nService);

  protected readonly fullstackHighlights: Highlight[] = [
    { icon: 'work_history', value: '3+', label: { en: 'Years of experience', fr: "Années d'expérience" } },
    { icon: 'rocket_launch', value: '10+', label: { en: 'Projects delivered', fr: 'Projets livrés' } },
    { icon: 'groups', value: '4', label: { en: 'Happy clients', fr: 'Clients satisfaits' } },
    { icon: 'school', value: '5+', label: { en: 'Technologies mastered', fr: 'Technologies maîtrisées' } },
  ];

  protected readonly dataHighlights: Highlight[] = [
    { icon: 'memory', value: '5+', label: { en: 'Deployed models', fr: 'Modèles déployés' } },
    { icon: 'dataset', value: '50M+', label: { en: 'Data processed', fr: 'Données traitées' } },
    { icon: 'insights', value: '4+', label: { en: 'ETL Pipelines', fr: 'Pipelines ETL' } },
    { icon: 'psychology', value: '2+', label: { en: 'GenAI Projects', fr: 'Projets GenAI' } },
  ];

  protected readonly autresHighlights: Highlight[] = [
    { icon: 'emoji_events', value: '1er', label: { en: 'CEPA 2023 Prize', fr: 'Prix CEPA 2023' } },
    { icon: 'public', value: 'Suisse', label: { en: 'First GLOBAL 2022', fr: 'First GLOBAL 2022' } },
    { icon: 'language', value: 'C1', label: { en: 'French', fr: 'Français' } },
    { icon: 'forum', value: 'B2', label: { en: 'English', fr: 'Anglais' } },
  ];

  protected readonly highlights = computed(() => {
    switch (this.currentMode()) {
      case 'fullstack': return this.fullstackHighlights;
      case 'data': return this.dataHighlights;
      case 'autres': return this.autresHighlights;
    }
  });

  protected readonly fullstackTestimonials: Testimonial[] = [
    { name: 'Ben EKLU', role: { en: 'JURINABE CoFounder', fr: 'CoFondateur JURINABE' }, text: { en: 'Charly transformed our vision into a robust and intuitive application. Outstanding work!', fr: 'Charly a transformé notre vision en une application robuste et intuitive. Un travail exceptionnel !' }, avatar: 'B' },
    { name: 'Frédéric ALLAH-ASSOGBA.', role: { en: 'CTO', fr: 'CTO' }, text: { en: 'Clean code, solid architecture, and delivered on time. A real added value for our team.', fr: 'Code propre, architecture solide et livraison dans les temps. Une vraie valeur ajoutée pour notre équipe.' }, avatar: 'F' }
  ];

  protected readonly dataTestimonials: Testimonial[] = [
    { name: 'Abel CHEROUAT.', role: { en: 'Advanced Programming Professor', fr: 'Professeur en Programmation Avancée' }, text: { en: 'His deep understanding of data structures and algorithms was evident in his project. A rigorous and competent student.', fr: 'Sa maîtrise approfondie des structures de données et des algorithmes était évidente dans son projet. Un étudiant rigoureux et compétent.' }, avatar: 'A' },
    // { name: 'Jean M.', role: { en: 'Lead Data Scientist', fr: 'Lead Data Scientist' }, text: { en: 'A smooth model deployment perfectly integrated into production. A rare technical expertise.', fr: 'Un déploiement de modèles fluide et parfaitement intégré en production. Une expertise technique rare.' }, avatar: 'J' }
  ];

  protected readonly autresTestimonials: Testimonial[] = [
    { name: 'Antoine DEKPOH', role: { en: 'First place in the 2023 English competition', fr: 'Premier au Concours d\'anglais 2023' }, text: { en: 'His presentation was eloquent and his team spirit excellent, leading to victory in 2023.', fr: 'Sa présentation était éloquente et son esprit d\'équipe excellent, menant à la victoire en 2023.' }, avatar: 'A' },
    { name: 'Olorode ATANLEY', role: { en: 'First GLOBAL Mentor', fr: 'Mentor First GLOBAL' }, text: { en: 'Remarkable technical curiosity and resilience during this international robotics competition.', fr: 'Curiosité technique et résilience remarquables lors de cette compétition de robotique internationale.' }, avatar: 'O' },

  ];

  protected readonly testimonials = computed(() => {
    switch (this.currentMode()) {
      case 'fullstack': return this.fullstackTestimonials;
      case 'data': return this.dataTestimonials;
      case 'autres': return this.autresTestimonials;
    }
  });

  protected readonly devCode = computed(() => {
    if (this.currentMode() === 'fullstack') {
      return {
        role: { en: "'Full-Stack Developer'", fr: "'Développeur Full-Stack'" },
        stack: "['Angular', 'Django', 'Laravel', 'Spring Boot', 'PostgreSQL']",
        passion: "'UI/UX Design'"
      };
    } else if (this.currentMode() === 'data') {
      return {
        role: { en: "'AI Data Engineer'", fr: "'Ingénieur IA & Data'" },
        stack: "['Python', 'Apache Spark', 'Talend', 'Scikit-learn']",
        passion: "'AI, Data, Data Science'"
      };
    } else {
      return {
        role: { en: "'Competitor & Bilingual'", fr: "'Compétiteur & Bilingue'" },
        stack: "['Robotics', 'Leadership', 'Languages']",
        passion: "'challenges'"
      };
    }
  });

  protected readonly aboutTexts = computed(() => {
    if (this.currentMode() === 'fullstack') {
      return {
        p1: { en: 'Passionate developer, I build modern web applications using clean and maintainable architectures. I enjoy transforming complex business needs into simple, accessible, and user-friendly interfaces.', fr: 'Développeur passionné, je conçois des applications web modernes en m\'appuyant sur des architectures propres et maintenables. J\'aime transformer des besoins métier complexes en interfaces simples, accessibles et agréables à utiliser.' },
        p2: { en: 'Curious and meticulous, I am equally invested in code quality as I am in the final user experience — from prototyping to production.', fr: 'Curieux et rigoureux, je m\'investis autant sur la qualité du code que sur l\'expérience finale livrée à l\'utilisateur — du prototypage à la mise en production.' },
        next: { en: 'AI Data Engineer Profile', fr: 'Profil Ingénieur IA & Data' }
      };
    } else if (this.currentMode() === 'data') {
      return {
        p1: { en: 'Passionate AI Data Engineer, I design robust and scalable data architectures. My goal is to extract value from raw data by automating processing pipelines and deploying high-performance machine learning models.', fr: 'AI Data Engineer passionné, je conçois des architectures de données robustes et évolutives. Mon objectif est d\'extraire la valeur des données brutes en automatisant leur traitement et en déployant des modèles de machine learning performants.' },
        p2: { en: 'I ensure every integration pipeline is optimized, secure, and production-ready, while maintaining absolute code quality standards.', fr: 'Je m\'assure que chaque pipeline d\'intégration est optimisé, sécurisé et prêt pour la production, tout en maintenant une exigence de qualité de code absolue.' },
        next: { en: 'Beyond the code', fr: 'Au-delà du code' }
      };
    } else {
      return {
        p1: { en: 'Beyond the code, I am a true competitor at heart. I had the opportunity to represent my country at the international robotics competition First GLOBAL 2022 in Switzerland, an unforgettable experience in high-pressure teamwork.', fr: 'Au-delà du code, je suis un compétiteur dans l\'âme. J\'ai eu l\'opportunité de représenter mon pays lors de la compétition internationale de robotique First GLOBAL 2022 en Suisse, une expérience inoubliable de travail d\'équipe sous pression.' },
        p2: { en: 'I am also the winner of the CEPA 2023 English competition as a team. My communication skills (C1 French, B2 English) allow me to easily thrive in international environments.', fr: 'Je suis également vainqueur du concours d\'anglais CEPA 2023 en équipe. Une aisance en communication (C1 Français, B2 Anglais) qui me permet d\'évoluer aisément dans des contextes internationaux.' },
        next: { en: 'Full-Stack Profile', fr: 'Profil Full-Stack' }
      };
    }
  });

  public toggleMode(): void {
    const modes: ProfileMode[] = ['fullstack', 'data', 'autres'];
    const currentIndex = modes.indexOf(this.currentMode());
    const nextIndex = (currentIndex + 1) % modes.length;
    this.currentMode.set(modes[nextIndex]);
  }
}
