import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { RequestWorkflowComponent } from './pages/request-workflow/request-workflow.component';


@NgModule({
  declarations: [
    RequestWorkflowComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
