import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RevealDirective } from '../../shared/reveal.directive';
import { I18nService } from '../../shared/i18n.service';

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, MatButtonModule, RevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly year = new Date().getFullYear();

  protected readonly socials: SocialLink[] = [
    { icon: 'code', label: 'GitHub', href: 'https://github.com/CharlyEKLU' },
    { icon: 'work', label: 'LinkedIn', href: '#' },
    { icon: 'mail', label: 'Email', href: 'mailto:eklufamily@gmail.com' },
    { icon: 'play_circle_filled', label: 'YouTube', href: '#' },
    { icon: 'facebook', label: 'Facebook', href: '#' },
    { icon: 'music_note', label: 'TikTok', href: '#' },
  ];
}
