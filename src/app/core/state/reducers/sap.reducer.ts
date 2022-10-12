import { ISapState } from '@app/core/models/state/ISap.state';
import { createReducer, on } from '@ngrx/store';
import { SapActionListPeriodsComplete, SapActionPeriodComplete, SapActionReload, SapInitAction } from '../actions/sap.action';

export const InitialState: ISapState = {
  EmployeeMasterData: {
    ColaboratorID: '',
    Name: '',
    PaternalLastName: '',
    MaternalLastName: '',
    Gender: '',
    DateOfBirth: 0,
    RFC: '',
    Position: 0,
    PositionDescription: '',
    AdmissionDate: 0,
    TerminationDate: 0,
    RetailStoreID: 0,
    RetailStoreDescription: '',
    Status: 0,
    Department: 0,
    DepartmentDescription: '',
    Shift: '',
    ShiftDescription: '',
    RecordStatus: 0,
    EntryDate: 0,
    ModifiedByUser: '',
    BossIDPosition: '',
    CollaboratorImmediateBossID: '',
    CollaboratorImmediateBossID1: '',
    Email: '',
    TimeManagementStatus: 0,
    AdmissionDate1: 0,
    TerminationDate1: 0,
    VacationBalance: '',
    CollaboratorLockedPayroll: '',
    ChangedOn: 0,
    Motive: '',
    PayrollArea: '',
    Telephone: 0,
  },
  ListPeriods: [],
  Period: ''
};


export const sapReducer = createReducer(
  InitialState,
  on(SapInitAction, (state) => {
    return state;
  }),
  on(SapActionListPeriodsComplete, (state, { listPeriods }) => ({
    ...state,
    EmployeeMasterData:state.EmployeeMasterData,
    Period:state.Period,
    ListPeriods: listPeriods,
  })),
  on(SapActionPeriodComplete, (state, { period }) => ({
    ...state,
    EmployeeMasterData:state.EmployeeMasterData,
    ListPeriods:state.ListPeriods,
    Period: period
  })),
  on(SapActionReload, (state, { sap }) => ({
    EmployeeMasterData: sap.EmployeeMasterData,
    ListPeriods: sap.ListPeriods,
    Period: sap.Period,
  })),

);
