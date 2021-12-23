import { Subject } from "rxjs";
import { ModalService } from "./modal.service";

export class BaseModal<T> {

  public readonly onClose = new Subject<T>();

  constructor(private modalService: ModalService) { };

  public close(data?: T) {
    this.onClose.next(data);
    this.onClose.complete();
    this.modalService.closeModal();
  }
}
