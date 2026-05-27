import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink,RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './Home.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
