import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Parcours } from '../../components/parcours/parcours';
import { Projects } from '../../components/projects/projects';
import { Contact } from '../../components/contact/contact';

/** Toutes les sections hors hero, regroupées sur une seule page. */
@Component({
  selector: 'app-details',
  imports: [About, Skills, Parcours, Projects, Contact],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {}
