import { Component, signal } from '@angular/core';
import { Navbar }     from './components/navbar/navbar';
import { Hero }       from './components/hero/hero';
import { About }      from './components/about/about';
import { Skills }     from './components/skills/skills';
import { Projects }   from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact }    from './components/contact/contact';
import { Footer }     from './components/footer/footer';
import { Loader }     from './components/loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  ready = signal(false);
}
