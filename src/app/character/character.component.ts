import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/simulator/character';
import { ModalService } from '../modal/modal.service';
import { SelectModalComponent } from './modals/select-modal/select-modal.component';

@Component({
  selector: 'sbb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character?: Character
  @Output() characterChange = new EventEmitter();

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    if (this.character) {
      this.character.golden = true;

    }
  }

  openCharacterSelect() {
    console.log('clicked', this.modalService)
    this.modalService.openModal<SelectModalComponent, Character>(SelectModalComponent, {character: this.character})
      .subscribe((char) => {
        console.log(char);
        this.character = char;
        this.characterChange.emit(char);
      });
  }

}
