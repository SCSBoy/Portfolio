import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';

/** Page d'accueil : uniquement le hero. Le reste vit sur /details. */
@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
