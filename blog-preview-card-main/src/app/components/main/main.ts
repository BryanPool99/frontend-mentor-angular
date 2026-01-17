import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  category = input.required<string>();
  date = input.required<string>();
  titlle = input.required<string>();
  description = input.required<string>();
}
