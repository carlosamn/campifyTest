import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomTimeValidator } from './custom-validator';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
})
export class ModalComponentComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponentComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: '',
        startTime: null,
        endTime: null,
      },
      { validators: CustomTimeValidator }
    );

    this.loadData();
  }

  loadData() {
    const data: any = localStorage.getItem('form');
    if (data) this.form.patchValue(JSON.parse(data));
  }

  onSubmit() {
    localStorage.setItem('form', JSON.stringify(this.form.value));
    this.dialogRef.close();
  }
}
