import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {path:'home', children: [
    {path:'workflow', loadChildren: () => import('./pages/workflow/workflow.module').then(m => m.WorkflowModule)},
    {path:'payroll', loadChildren: () => import('./pages/payroll/payroll.module').then(m => m.PayrollModule)},
    {path:'absence', loadChildren: () => import('./pages/absence/absence.module').then(m => m.AbsenceModule)},
    {path:'manager', loadChildren: () => import('./pages/manager/manager.module').then(m => m.ManagerModule)},
    {path:'report', loadChildren: () => import('./pages/report/report.module').then(m => m.ReportModule)},
  ]},
  {path:'**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
