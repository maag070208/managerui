import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { RequestWorkflowComponent } from './pages/request-workflow/request-workflow.component';
import { BodyComponent } from '@app/shared/components/body/body.component';


@NgModule({
  declarations: [
    RequestWorkflowComponent
  ],
  imports: [
    CommonModule,
    BodyComponent,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
