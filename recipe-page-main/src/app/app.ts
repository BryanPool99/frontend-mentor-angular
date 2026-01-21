import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { CardPreparationTime } from "./components/card-preparation-time/card-preparation-time";
import { SectionDetails } from "./components/section-details/section-details";

@Component({
  selector: 'app-root',
  imports: [Header, CardPreparationTime, SectionDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recipe-page-main');
}
