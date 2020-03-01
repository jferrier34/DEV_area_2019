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
      this.text = "This action triggers when the temperature drops below 15 degrees";
      this.name = "temp-under-value"
    }
    else {
      this.text = "This action triggers if it rains tomorrow";
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
