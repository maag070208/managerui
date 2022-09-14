import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.scss'],
})
export class NavbarItemsComponent implements OnChanges {

  @Input() items: any[] = [];

  public isMatMenuOpen = false;
  public prevButtonTrigger:any;

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  buttonEnter(trigger:any) {
      if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        trigger.openMenu();
      }
      else if (!this.isMatMenuOpen) {
        this.prevButtonTrigger = trigger
        trigger.openMenu();
      }
      else {
        this.prevButtonTrigger = trigger
      }
  }

  buttonLeave(trigger:any) {
    setTimeout(() => {
      if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
      } else {
      }
    }, 5000)
  }
}
