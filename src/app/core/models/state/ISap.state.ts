import { IItemsEmployeeMasterData } from "../sap/response/IEmployeeMasterData.res.model";
import { IPeriodItem } from "../sap/response/IPeriod.res.model";

export interface ISapState {
  EmployeeMasterData: IItemsEmployeeMasterData;
  ListPeriods: IPeriodItem[];
  Period:string;
}
