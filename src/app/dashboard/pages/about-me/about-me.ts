import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { RouterOutlet } from "../../../../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutMe {}
