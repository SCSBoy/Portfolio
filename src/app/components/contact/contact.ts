import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { animate } from 'motion';
import { RevealDirective } from '../../shared/reveal.directive';
import { I18nService } from '../../shared/i18n.service';
import { TranslationKey } from '../../data/translations.data';

interface ContactInfo {
  icon: string;
  labelKey: TranslationKey;
  value: string;
  href: string;
}

const CONTACT_EMAIL = 'charlyeklu27@gmail.com';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RevealDirective,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = new FormBuilder();
  private readonly submitButton = viewChild<ElementRef<HTMLButtonElement>>('submitButton');
  protected readonly i18n = inject(I18nService);

  protected readonly sending = signal(false);
  protected readonly submitted = signal(false);

  protected readonly contactInfo: ContactInfo[] = [
    {
      icon: 'mail',
      labelKey: 'contact.info.email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    { icon: 'link', labelKey: 'contact.info.github', value: 'github.com/CharlyEKLU', href: 'https://github.com/CharlyEKLU' },
    { icon: 'phone', labelKey: 'contact.info.phone', value: '(+228) 90 51 56 63', href: 'tel:+22890515663' },
  ];

  protected readonly location = computed(() => ({
    city: 'Lomé, Togo',
    timezone: 'GMT (UTC+0)',
    availability: this.i18n.t('contact.info.availability'),
  }));

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const button = this.submitButton()?.nativeElement;
    if (button) {
      animate(
        button,
        { scaleX: [1, 0.94, 1], scaleY: [1, 0.94, 1] },
        { duration: 0.35, ease: 'easeOut' }
      );
    }

    this.sending.set(true);
    const { name, email, message } = this.form.getRawValue();

    try {
      const response = await fetch("https://formspree.io/f/xdapdzon", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        this.sending.set(false);
        this.submitted.set(true);
        this.form.reset();
        
        // Hide success message after 6 seconds
        setTimeout(() => this.submitted.set(false), 6000);
      } else {
        this.sending.set(false);
        console.error("Formspree error", await response.text());
      }
    } catch (err) {
      this.sending.set(false);
      console.error("Formspree connection error", err);
    }
  }
}
