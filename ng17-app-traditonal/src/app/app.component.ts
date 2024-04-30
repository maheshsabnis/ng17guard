import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng17-app-traditonal';

  accept = "ACCEPT";
  isChecked = true;
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
}
