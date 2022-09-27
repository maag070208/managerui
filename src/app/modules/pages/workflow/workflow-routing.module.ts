import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '@app/modules/core/guards/auth/login.guard';
import { MainGuard } from '@app/modules/core/guards/main.guard';
import { RequestWorkflowGuard } from './core/guard/request-workflow.guard';
import { RequestWorkflowComponent } from './pages/request-workflow/request-workflow.component';

const routes: Routes = [
  {
    path: 'request-workflow',
    component: RequestWorkflowComponent,
    canActivate: [MainGuard],
    data: {
      syncGuards: [LoginGuard, RequestWorkflowGuard],
    },
  },
  { path: '', redirectTo: 'request-workflow', pathMatch: 'full' },
  { path: '**', redirectTo: 'request-workflow', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkflowRoutingModule {}
