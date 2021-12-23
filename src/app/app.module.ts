import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { TreasureComponent } from './treasure/treasure.component';
import { BoardComponent } from './board/board.component';
import { HeroComponent } from './hero/hero.component';
import { SelectModalComponent } from './character/modals/select-modal/select-modal.component';
import { ModalComponent } from './modal/modal.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    TreasureComponent,
    BoardComponent,
    HeroComponent,
    SelectModalComponent,
    ModalComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
