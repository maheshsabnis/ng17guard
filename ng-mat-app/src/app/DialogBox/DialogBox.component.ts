import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogTitle, MatDialogContent, MAT_DIALOG_DATA, MatDialogActions,MatDialogClose } from '@angular/material/dialog';
import { DialogBoxModel } from '../model/app.dialog.model';
import { publishFacade } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import {MatButton, MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-DialogBox',
  standalone:true,
  imports:[MatDialogTitle, MatDialogContent, MatButtonModule,FormsModule,MatDialogActions,MatDialogClose],
  templateUrl: './DialogBox.component.html',
  styleUrls: ['./DialogBox.component.css']
})
export class DialogBoxComponent implements OnInit {

  /* Inject the MAT_DIALOG_DATA a data object that will be used to show data in UI of the DialogBox */
  constructor( @Inject(MAT_DIALOG_DATA) public data:DialogBoxModel) {
    console.log(`Received Data: ${JSON.stringify(data)}`);
  }

  ngOnInit() {
  }

}
