import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'sbb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChildren('modalTemplate', { read: ViewContainerRef }) modals?: QueryList<ViewContainerRef>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public modalService: ModalService) { }

  ngAfterViewInit(): void {
    if (!this.modals) {
      throw new Error('Failed to initialize modals.');
    }

    this.loadModals();
    this.modals.changes.subscribe(() => this.loadModals());
  }

  ngOnInit(): void {
  }

  public closeModal(event: MouseEvent) {
    event.stopPropagation();
    this.modalService.closeModal();
  }

  public modalClicked(event: MouseEvent) {
    event.stopPropagation();
  }

  private loadModals() {
    this.modals?.forEach((m, i) => {
      console.log(m)
      if (m.length) {
        return;
      }
      const modal = this.modalService.modals[i];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(modal.component);
      const component: ComponentRef<any> = m.createComponent(componentFactory);
      for (const key in modal.data) {
        if (Object.prototype.hasOwnProperty.call(modal.data, key)) {
          component.instance[key] = modal.data[key];
        }
      }
      console.log(component, component.changeDetectorRef)
      component.changeDetectorRef.detectChanges();
      modal.created(component);
    })
  }

}
