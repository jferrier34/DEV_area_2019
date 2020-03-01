import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActReact } from 'src/app/Model/users.model';

@Component({
  selector: 'app-act-react-view',
  templateUrl: './act-react-view.component.html',
  styleUrls: ['./act-react-view.component.css']
})
export class ActReactViewComponent implements OnInit {

  @Input() item: ActReact;
  @Output() delete  = new EventEmitter<number>();

  public tocken: string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  constructor() { }

  deletethis()
  {
    if (confirm("Voulez vous vraiment vous séparer de cette action-reaction ? C'est pas trés sympa") == true)
    {
      this.delete.emit(1);
    }
  }

  ngOnInit() {
  }

}
