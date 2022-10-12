import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IGetPeriodsReq } from '@app/core/models/sap/request/IGetPeriods.req.model';
import { IEmployeeMasterDataReq } from '@app/core/models/sap/request/IMasterData.req.model';
import { EmployeeMasterData } from '@app/core/models/sap/response/IEmployeeMasterData.res.model';
import { GetPeriods } from '@app/core/models/sap/response/IPeriod.res.model';
import { TResultSAP } from '@app/core/models/sap/response/TResultSAP.res.model';
import { AlertService } from '@app/core/services/alert.service';
import { SapActionListPeriodsComplete, SapActionPeriodComplete } from '@app/core/state/actions/sap.action';
import { AppState } from '@app/core/state/app.state';
import { GetAuthUserCollaboratorID } from '@app/core/state/selectors/auth.selector';
import { select, Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { SapService } from '../../../auth/core/services/sap.service';

@Injectable()
export class SapResolver implements Resolve<any> {
  constructor(
    private _sapService: SapService,
    private store: Store<AppState>,
    private _alertService: AlertService,

  ) {}


  async getPeriods(): Promise<TResultSAP<GetPeriods>> {
    let periodsReq:IGetPeriodsReq = {
      GetPeriods: {
        Items: {
          StartDate: "20220101",
          EndDate: "20221231",
          PayrollArea: "ZR"
        }
      }
    }
    console.log('periodsReq', periodsReq);
    return await this._sapService.getPeriods(periodsReq);
  }

  async getEmployeeMasterData(employee: IEmployeeMasterDataReq): Promise<TResultSAP<EmployeeMasterData>> {
    let employeeMasterData = await this._sapService.getEmployeeMasterData(employee);
    console.log('employeeMasterData', employeeMasterData);
    return employeeMasterData;
  }

  async resolve(): Promise<boolean> {
    const CollaboratorId = await await firstValueFrom(this.store.pipe(select(GetAuthUserCollaboratorID)));

    const periodList: TResultSAP<GetPeriods> = await this.getPeriods();
    if(periodList.Message.Items.Type == "E" || periodList.Message.Items.Type == "W"){
      this._alertService.openSnackBar({ title: "Error", message: periodList.Message.Items.Message, icon: "error", type: 'mat-error', options: {} });
      return false;
    }
    let period = periodList['GetPeriods'].Items.slice(-1).pop()?.Week + '.' + periodList['GetPeriods'].Items.slice(-1).pop()?.Year;

    this.store.dispatch(SapActionListPeriodsComplete({ listPeriods: periodList['GetPeriods'].Items }));
    this.store.dispatch(SapActionPeriodComplete({ period: period }));

    console.log('period', period);

    let employeeMasterDataReq: IEmployeeMasterDataReq = {
      EmployeeMasterData: {
        Items: {
          Period: period,
          Colaborator: CollaboratorId,
        },
      },
    };
    const masterData = await this.getEmployeeMasterData(employeeMasterDataReq);
    if(masterData.Message.Items.Type === "E"){
      this._alertService.openSnackBar({ title: "Error", message: masterData.Message.Items.Message, icon: "error", type: 'mat-error', options: {} });
      return false;
    }
    return true;
  }
}
