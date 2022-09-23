import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarItemsComponent } from './navbar-items/navbar-items.component';
import { INavItems } from '@app/shared/models/navbar/INavItems.model';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarItemsComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public routes: INavItems[] = [
    {
      name: 'Prenomina',
      basePath: 'home/payroll',
      icon: 'payment',
      child: []
    },
    {
      name: 'Workflow',
      basePath: 'home/workflow',
      icon: 'book',
      child: [{ name: 'Workflow', path: 'request-workflow', action: false }, { name: 'Workflow Pendientes', path: 'pending-workflow' , action: false}]
    },
    {
      name: 'Manager',
      basePath: 'home/manager',
      icon: 'supervisor_account',
      child: [{ name: 'Workflow', path: 'workflow' }, { name: 'Suplente', path: 'replacement', action: false}, { name: 'Cambio Horario', path: 'change-schedule', action: false }]
    },
    { name: 'Perfil', basePath: 'home/profile', icon: 'person', child: [{ name: 'Actualizar Contraseña', path: 'update-password', action: false }, {name:'logout', path:'logout', action: true}] },
  ]

  constructor() { }



}

