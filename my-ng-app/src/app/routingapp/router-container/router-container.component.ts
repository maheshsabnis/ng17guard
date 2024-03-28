import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router-container',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './router-container.component.html',
  styleUrl: './router-container.component.css'
})
export class RouterContainerComponent {

}
