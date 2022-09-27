import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainGuard } from './core/guards/main.guard';
import { LoginGuard } from './core/guards/auth/login.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  // providers: [MainGuard, LoginGuard]
})
export class PagesModule { }
