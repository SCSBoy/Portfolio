import { Injectable, signal } from '@angular/core';

/** Flips to true once the initial loading-screen animation has finished. */
@Injectable({ providedIn: 'root' })
export class PreloaderService {
  readonly done = signal(false);
}
