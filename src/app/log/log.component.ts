import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'sbb-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(private log: LogService) { }

  ngOnInit(): void {
    this.log.newLogEntry.subscribe((entry) => console.log(entry));
  }

}
