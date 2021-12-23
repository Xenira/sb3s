import { Component, Input, OnInit } from '@angular/core';
import { Treasure } from 'src/simulator/treasure';

@Component({
  selector: 'sbb-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss']
})
export class TreasureComponent implements OnInit {

  @Input() treasure?: Treasure;

  constructor() { }

  ngOnInit(): void {
  }

}
