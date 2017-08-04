// @flow
import * as localForage from 'localforage';
import type { ProgramTemplateType, TemplateModificationType } from '../types';

type BenchPressDataType = {
  exerciseName: 'benchPress',
  reps: ?number,
  exerciseWeight: ?number
};
type DeadliftDataType = {
  exerciseName: 'deadlift',
  reps: ?number,
  exerciseWeight: ?number
};
type OverheadPressDataType = {
  exerciseName: 'overheadPress',
  reps: ?number,
  exerciseWeight: ?number
};
type SquatDataType = {
  exerciseName: 'squat',
  reps: ?number,
  exerciseWeight: ?number
};

/**
 * Returns either the  static saved property or a default property
 */
export default class DatabaseApi {
  static saveBodyweight(bodyweight: number): number {
    localForage.setItem('bodyweight', bodyweight);
    return bodyweight;
  }

  static getBodyweight(): Promise<?number> {
    return localForage.getItem('bodyweight');
  }

  static saveSex(sex: 'Male' | 'Female'): 'Male' | 'Female' {
    localForage.setItem('sex', sex);
    return sex;
  }

  static getSex(): Promise<'Male' | 'Female'> {
    return localForage.getItem('sex');
  }

  static saveUnits(units: 'lbs' | 'kg'): 'lbs' | 'kg' {
    localForage.setItem('units', units);
    return units;
  }

  static getUnits(): Promise<'lbs' | 'kg'> {
    return localForage.getItem('units');
  }

  static saveProgramTemplate(
    programTemplate: ProgramTemplateType
  ): ProgramTemplateType {
    localForage.setItem('programTemplate', programTemplate);
    return programTemplate;
  }

  static getProgramTemplate(): Promise<ProgramTemplateType> {
    return localForage.getItem('programTemplate');
  }

  static saveTemplateModification(
    modification: TemplateModificationType
  ): TemplateModificationType {
    localForage.setItem('templateModification', modification);
    return modification;
  }

  static getTemplateModification(): Promise<TemplateModificationType> {
    return localForage.getItem('templateModification');
  }

  static saveRoundingNumber(roundingNumber: 5 | 2.5): 5 | 2.5 {
    localForage.setItem('roundingNumber', roundingNumber);
    return roundingNumber;
  }

  static getRoundingNumber(): Promise<5 | 2.5> {
    return localForage.getItem('roundingNumber');
  }

  static saveBenchPressData(
    benchPressData: BenchPressDataType
  ): BenchPressDataType {
    localForage.setItem('benchPressData', benchPressData);
    return benchPressData;
  }

  static getBenchPressData(): Promise<BenchPressDataType> {
    return localForage.getItem('benchPressData');
  }

  static saveDeadliftData(deadliftData: DeadliftDataType): DeadliftDataType {
    localForage.setItem('deadliftData', deadliftData);
    return deadliftData;
  }

  static getDeadliftData(): Promise<DeadliftDataType> {
    return localForage.getItem('deadliftData');
  }

  static saveOverheadPressData(
    overheadPressData: OverheadPressDataType
  ): OverheadPressDataType {
    localForage.setItem('overheadPressData', overheadPressData);
    return overheadPressData;
  }

  static getOverheadPressData(): Promise<OverheadPressDataType> {
    return localForage.getItem('overheadPressData');
  }

  static saveSquatData(squatData: SquatDataType): SquatDataType {
    localForage.setItem('squatData', squatData);
    return squatData;
  }

  static getSquatData(): Promise<SquatDataType> {
    return localForage.getItem('squatData');
  }
}
