import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-details',
  imports: [],
  templateUrl: './section-details.html',
  styleUrl: './section-details.scss',
})
export class SectionDetails {
  title = input.required<string>();
}
