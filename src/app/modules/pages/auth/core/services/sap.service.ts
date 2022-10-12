import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetPeriodsReq } from '@app/core/models/sap/request/IGetPeriods.req.model';
import { IEmployeeMasterDataReq } from '@app/core/models/sap/request/IMasterData.req.model';
import { EmployeeMasterData } from '@app/core/models/sap/response/IEmployeeMasterData.res.model';
import { GetPeriods } from '@app/core/models/sap/response/IPeriod.res.model';
import { TResultSAP } from '@app/core/models/sap/response/TResultSAP.res.model';
import { environment } from '@env/environment';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SapService {

  private BASE_URL = environment.apiSap;

  private EMPLOYEE_MASTER_DATA_URL = '/EmployeeMasterData';

  private PERIODS_URL = '/GetPeriods';

  constructor(private http: HttpClient) { }

  public async getEmployeeMasterData(employee:IEmployeeMasterDataReq): Promise<TResultSAP<EmployeeMasterData>> {
    try {
      let employeeMasterData$ = this.http.post<TResultSAP<EmployeeMasterData>>(this.BASE_URL + this.EMPLOYEE_MASTER_DATA_URL, employee);
      let employeeMasterData:TResultSAP<EmployeeMasterData> = await firstValueFrom<TResultSAP<EmployeeMasterData>>(employeeMasterData$);
      return employeeMasterData;
    } catch (error: any) {
      console.log("MASTER_DATA",error);
      const masterData = {} as TResultSAP<EmployeeMasterData>;
      masterData.Message = {
        Items: {
          Message: "Servicios de SAP no disponibles (EmployeeMasterData)",
          Type: "E"
        }
      }
      return masterData;
    }
  }

  public async getPeriods(periodReq:IGetPeriodsReq): Promise<TResultSAP<GetPeriods>> {
    try{
      let periods$ = this.http.post<TResultSAP<GetPeriods>>(this.BASE_URL + this.PERIODS_URL,periodReq);
      let periods:TResultSAP<GetPeriods> = await firstValueFrom<TResultSAP<GetPeriods>>(periods$);
      return periods;
    }catch(error: any){
      console.log("PERIODS",error);
      const periods = {} as TResultSAP<GetPeriods>;
      periods.Message = {
        Items: {
          Message: "Servicios de SAP no disponibles (GetPeriods)",
          Type: "E"
        }
      }
      return periods;
    }
  }


}
