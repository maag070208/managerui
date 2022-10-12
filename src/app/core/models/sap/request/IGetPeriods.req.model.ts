interface Items {
  StartDate: string;
  EndDate: string;
  PayrollArea: string;
}

interface GetPeriods {
  Items: Items;
}

export interface IGetPeriodsReq {
  GetPeriods: GetPeriods;
}
