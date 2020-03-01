import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';
import { Action, Param } from 'src/app/Model/users.model';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-weather-services',
  templateUrl: './weather-services.component.html',
  styleUrls: ['./weather-services.component.css']
})
export class WeatherServicesComponent implements OnInit {

  constructor() { }
  public text;
  public name;
  @Input() type;
  ngOnInit() {
    if (this.type == 1) {
      this.text = "Cette action déclenche lorsque la température passe en dessous de 15 degrés";
      this.name = "temp-under-value"
    }
    else {
      this.text = "Cette action déclenche si il pleut demain";
      this.name = "rainy-day"
    }

  }

  @Output() Valid = new EventEmitter<Action>();
 
  public temps = "";

  valid() {

    var nAction: Action = new Action();
    nAction.name = "Météo";
    nAction.Service = "Weather";
    nAction.ServiceName = this.name;
    nAction.token = "notoken"
    this.Valid.emit(nAction);
  }

}
