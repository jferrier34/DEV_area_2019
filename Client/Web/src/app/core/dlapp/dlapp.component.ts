import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dlapp',
  templateUrl: './dlapp.component.html',
  styleUrls: ['./dlapp.component.css']
})
export class DlappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = '/assets/client.apk';
  }

}
