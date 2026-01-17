import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  data = {
    imgHeader: 'assets/images/illustration-article.svg',
    category: 'Learning',
    date: '21 Dec 2023',
    title: 'HTML & CSS foundations',
    description:
      'These languages are the backbone of every website, defining structure, content, and presentation.  asd',
    imgFooter: 'assets/images/image-avatar.webp',
    author: 'Greg Hooper',
  };
}
