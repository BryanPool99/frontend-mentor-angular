import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { SocialLink } from "./components/social-link/social-link";

@Component({
  selector: 'app-root',
  imports: [Header, SocialLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('social-links-profile-main');
  items = [
    {
      id: 1,
      label : 'Github',
      link : 'https://github.com/BryanPool99',
    },
    {
      id: 2,
      label : 'Frontend Mentor',
      link : 'https://www.frontendmentor.io/profile/BryanPool99',
    },
    {
      id: 3,
      label : 'LinkedIn',
      link : 'https://www.linkedin.com/in/bryan-arredondo/',
    }
    ,
    {
      id: 4,
      label : 'Twitter',
      link : '#',
    },
    {
      id: 5,
      label : 'Instagram',
      link : '#',
    }
  ]

  personalData ={
    avatar : 'assets/images/avatar-jessica.jpeg',
    name : 'Bryan',
    country : 'Arequipa, Perú',
    description : '"Fullstack developer java/angular"'
  }
}
