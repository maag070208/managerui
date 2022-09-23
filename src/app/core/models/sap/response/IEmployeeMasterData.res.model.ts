export interface IEmployeeMasterData {
    Items: Items;
}

 interface Items {
    ColaboratorID:                string;
    Name:                         string;
    PaternalLastName:             string;
    MaternalLastName:             string;
    Gender:                       string;
    DateOfBirth:                  number;
    RFC:                          string;
    Position:                     number;
    PositionDescription:          string;
    AdmissionDate:                number;
    TerminationDate:              number;
    RetailStoreID:                number;
    RetailStoreDescription:       string;
    Status:                       number;
    Department:                   number;
    DepartmentDescription:        string;
    Shift:                        string;
    ShiftDescription:             string;
    RecordStatus:                 number;
    EntryDate:                    number;
    ModifiedByUser:               string;
    BossIDPosition:               string;
    CollaboratorImmediateBossID:  string;
    CollaboratorImmediateBossID1: string;
    Email:                        string;
    TimeManagementStatus:         number;
    AdmissionDate1:               number;
    TerminationDate1:             number;
    VacationBalance:              string;
    CollaboratorLockedPayroll:    string;
    ChangedOn:                    number;
    Motive:                       string;
    PayrollArea:                  string;
    Telephone:                    number;
}


