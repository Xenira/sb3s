import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  public newLogEntry = new EventEmitter<string>();

  constructor() { }

  public log(...args: any[]): void {
    this.newLogEntry.emit(args.join(' '));
  }
}
