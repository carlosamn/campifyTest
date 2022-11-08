import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponentComponent } from '../app/modal-component/modal-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'campifyModal';

  constructor(public matDialog: MatDialog) {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'dialog-modal';
    this.matDialog.open(ModalComponentComponent, dialogConfig);
  }
}
