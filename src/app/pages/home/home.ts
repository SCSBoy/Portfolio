import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Parcours } from '../../components/parcours/parcours';
import { Projects } from '../../components/projects/projects';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Parcours, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
