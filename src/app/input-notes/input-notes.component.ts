import { Component, OnInit } from '@angular/core';
import { InputValue } from './../modal/input.modal';

@Component({
  selector: 'app-input-notes',
  templateUrl: './input-notes.component.html',
  styleUrls: ['./input-notes.component.scss']
})
export class InputNotesComponent implements OnInit {

  public inputValue: InputValue[] = [];
  public title: string;
  public status: string;
  public tabValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  public addNote() {
      this.inputValue.push( {
        title: this.title,
        status: this.status
      });
      this.title = null;
      this.status = null;
  }

  setTabValue(tabValue) {
      const value = tabValue === 'All' ? '' : tabValue;
      this.tabValue = {status: value};
  }
}
