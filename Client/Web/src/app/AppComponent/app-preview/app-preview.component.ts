import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './app-preview.component.html',
  styleUrls: ['./app-preview.component.css']
})
export class AppPreviewComponent implements OnInit {

  constructor() { }
  @Input() apps: any = 0;

  uniqueParam: String = "Par-" + this.apps.id;
  uniqueDel: String = "Del-" + this.apps.id;

  ngOnInit() {
  }

}
