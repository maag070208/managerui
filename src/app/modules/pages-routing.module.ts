import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'home', children: [
    {path:'workflow', loadChildren: () => import('./workflow/workflow.module').then(m => m.WorkflowModule)},
    {path:'payroll', loadChildren: () => import('./payroll/payroll.module').then(m => m.PayrollModule)},
    {path:'absence', loadChildren: () => import('./absence/absence.module').then(m => m.AbsenceModule)},
    {path:'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)},
    {path:'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule)},
  ]},
  {path:'**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
