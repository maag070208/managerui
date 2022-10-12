import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { RequestWorkflowComponent } from './pages/request-workflow/request-workflow.component';
import { BodyComponent } from '@app/shared/components/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { SapService } from '../auth/core/services/sap.service';
import { SapResolver } from './core/resolver/sap.resolver';


@NgModule({
  declarations: [
    RequestWorkflowComponent,

  ],
  imports: [
    CommonModule,
    BodyComponent,
    WorkflowRoutingModule,
    HttpClientModule
  ],
  providers: [SapService,SapResolver]

})
export class WorkflowModule { }
