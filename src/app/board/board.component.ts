import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/simulator/player';

@Component({
  selector: 'sbb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() player?: Player = new Player();
  @Input() rotated = false;

  constructor() { }

  ngOnInit(): void {
  }

}
