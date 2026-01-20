import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  avatarImg = input.required<string>();
  name = input.required<string>();
  country = input.required<string>();
  description = input.required<string>();
}
