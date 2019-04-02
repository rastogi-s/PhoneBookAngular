import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  input: string;
  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    this.messageEvent.emit(this.input);
  }

}
