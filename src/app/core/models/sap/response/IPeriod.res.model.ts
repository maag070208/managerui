export interface GetPeriods {
    Items: IPeriodItem[];
}

export interface IPeriodItem {
    Year:      number;
    Week:      number | string;
    StartDate: number;
    EndDate:   number;
}
