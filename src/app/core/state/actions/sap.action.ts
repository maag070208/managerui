import { IPeriodItem } from '@app/core/models/sap/response/IPeriod.res.model';
import { ISapState } from '@app/core/models/state/ISap.state';
import { createAction, props } from '@ngrx/store';

export const SapInitAction = createAction("[Load Sap State]");

export const SapActionListPeriodsComplete = createAction("[Load SAP LIST PERIODS] COMPLETE", props<{ listPeriods:IPeriodItem[] }>());

export const SapActionPeriodComplete = createAction("[Load SAP PERIOD] COMPLETE", props<{ period:string }>());

export const SapActionReload = createAction("[Load SAP] RELOAD", props<{ sap:ISapState }>());



