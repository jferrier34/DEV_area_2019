import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '../Model/users.model';

@Component({
  selector: 'app-all-reactions',
  templateUrl: './all-reactions.component.html',
  styleUrls: ['./all-reactions.component.css']
})
export class AllReactionsComponent implements OnInit {


  constructor(public router: Router) { }
  @ViewChild('close') closeBtn: ElementRef;
  @Output() Valid = new EventEmitter<Action>();

  public select = 0;
  public uniqueReact = "okaaokok";

  ngOnInit() {
  }

  valid($event)
  {
    console.log($event);
    this.select = 0;
    this.closeBtn.nativeElement.click();
    this.Valid.emit($event);
  }

}
