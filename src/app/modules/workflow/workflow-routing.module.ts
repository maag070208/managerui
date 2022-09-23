import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestWorkflowComponent } from './pages/request-workflow/request-workflow.component';

const routes: Routes = [
  {path:'request-workflow', component: RequestWorkflowComponent},
  {path:'', redirectTo: 'request-workflow', pathMatch: 'full'},
  {path:'**', redirectTo: 'request-workflow', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
