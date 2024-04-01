import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name = signal<string>('Mahesh Sabnis');

  nameInput = signal<string>('Tejas Sabnis');


  constructor() {
    console.log('Parent constructor');
  }

   updateSignalInParent(){
    this.name.set("Mahesh Rameshrao Sabnis, Pune");
  }
}
