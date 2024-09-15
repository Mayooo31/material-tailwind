import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-tailwind';
  themeService = inject(ThemeService);

  toggleThemeColor() {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: 'red' };
    });
  }
}
