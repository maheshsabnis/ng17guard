import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './Table/Table.component';
import { DialogBoxComponent } from './DialogBox/DialogBox.component';

import {MatDialog, MatDialogTitle, MatDialogContent, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { DialogBoxModel } from './model/app.dialog.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, DialogBoxComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-mat-app';
  dialodData:DialogBoxModel;
  /* Inject the MatDialog to make sure that the Dialog Box is accessible */
  constructor(private dialog:MatDialog){
    this.dialodData = new DialogBoxModel(101, 'Mahesh');
  }


  openDataEntryDialog():void {
     /* MAke the DialogBoxComponent object  as a DialogBox for MatDialog Class instance */

     this.dialog.open(DialogBoxComponent, {
      data: this.dialodData
     });



  }
}
