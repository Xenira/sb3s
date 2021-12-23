import { Component, OnInit } from '@angular/core';
import { BaseModal } from 'src/app/modal/base-modal';
import { ModalService } from 'src/app/modal/modal.service';
import { Character } from 'src/simulator/character';
import { CHARACTERS } from 'src/simulator/characters';
import { BaadBillyGruff } from 'src/simulator/characters/baadBillyGruff';

@Component({
  selector: 'sbb-select-modal',
  templateUrl: './select-modal.component.html',
  styleUrls: ['./select-modal.component.scss']
})
export class SelectModalComponent extends BaseModal<Character> implements OnInit {

  public character?: Character;
  public characters: Character[] = [];

  constructor(modalService: ModalService) {
    super(modalService);
    CHARACTERS.forEach((C) => this.characters.push(new C()));
  }

  ngOnInit(): void {
    console.log(this.character)
  }

  selectChar(char: Character | null) {
    console.log(char)
    this.character = char || undefined;
  }

  isValid(): boolean {
    return true;
  }

  save(): void {
    if (this.isValid()) {
      this.close(new BaadBillyGruff());
    }
  }

}
