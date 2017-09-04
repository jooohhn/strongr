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
 * Returns either the static saved property or a default property
 */
export default class DatabaseApi {
  static saveBodyweight(bodyweight: number): number {
    localForage.setItem('bodyweight', bodyweight);
    return bodyweight;
  }

  static async getBodyweight(): Promise<{
    type: 'bodyweight',
    contents: ?number
  }> {
    const obj = {
      type: 'bodyweight',
      contents: (await localForage.getItem('bodyweight')) || null
    };
    return obj;
  }

  static saveUnits(units: 'lbs' | 'kg'): 'lbs' | 'kg' {
    localForage.setItem('units', units);
    return units;
  }

  static async getUnits(): Promise<{ type: 'units', contents: 'lbs' | 'kg' }> {
    const obj = {
      type: 'units',
      contents: (await localForage.getItem('units')) || 'lbs'
    };
    return obj;
  }

  static saveProgramTemplate(
    programTemplate: ProgramTemplateType
  ): ProgramTemplateType {
    localForage.setItem('programTemplate', programTemplate);
    return programTemplate;
  }

  static async getProgramTemplate(): Promise<{
    type: 'programTemplate',
    contents: ProgramTemplateType
  }> {
    const obj = {
      type: 'programTemplate',
      contents: (await localForage.getItem('programTemplate')) || '5/3/1'
    };
    return obj;
  }

  static saveTemplateModification(
    modification: TemplateModificationType
  ): TemplateModificationType {
    localForage.setItem('templateModification', modification);
    return modification;
  }

  static async getTemplateModification(): Promise<{
    type: 'templateModification',
    contents: TemplateModificationType
  }> {
    const obj = {
      type: 'templateModification',
      contents:
        (await localForage.getItem('templateModification')) || 'The Triumvirate'
    };
    return obj;
  }

  static saveRoundingNumber(roundingNumber: 5 | 2.5): 5 | 2.5 {
    localForage.setItem('roundingNumber', roundingNumber);
    return roundingNumber;
  }

  static async getRoundingNumber(): Promise<{
    type: 'roundingNumber',
    contents: 5 | 2.5
  }> {
    const obj = {
      type: 'roundingNumber',
      contents: (await localForage.getItem('roundingNumber')) || 5
    };
    return obj;
  }

  static saveBenchPressData(
    benchPressData: BenchPressDataType
  ): BenchPressDataType {
    localForage.setItem('benchPressData', benchPressData);
    return benchPressData;
  }

  static async getBenchPressData(): Promise<{
    type: 'benchPressData',
    contents: BenchPressDataType
  }> {
    const obj = {
      type: 'benchPressData',
      contents: (await localForage.getItem('benchPressData')) || {
        exerciseName: 'benchPress',
        reps: null,
        exerciseWeight: null
      }
    };
    return obj;
  }

  static saveDeadliftData(deadliftData: DeadliftDataType): DeadliftDataType {
    localForage.setItem('deadliftData', deadliftData);
    return deadliftData;
  }

  static async getDeadliftData(): Promise<{
    type: 'deadliftData',
    contents: DeadliftDataType
  }> {
    const obj = {
      type: 'deadliftData',
      contents: (await localForage.getItem('deadliftData')) || {
        exerciseName: 'deadlift',
        reps: null,
        exerciseWeight: null
      }
    };
    return obj;
  }

  static saveOverheadPressData(
    overheadPressData: OverheadPressDataType
  ): OverheadPressDataType {
    localForage.setItem('overheadPressData', overheadPressData);
    return overheadPressData;
  }

  static async getOverheadPressData(): Promise<{
    type: 'overheadPressData',
    contents: OverheadPressDataType
  }> {
    const obj = {
      type: 'overheadPressData',
      contents: (await localForage.getItem('overheadPressData')) || {
        exerciseName: 'overheadPress',
        reps: null,
        exerciseWeight: null
      }
    };
    return obj;
  }

  static saveSquatData(squatData: SquatDataType): SquatDataType {
    localForage.setItem('squatData', squatData);
    return squatData;
  }

  static async getSquatData(): Promise<{
    type: 'squatData',
    contents: SquatDataType
  }> {
    const obj = {
      type: 'squatData',
      contents: (await localForage.getItem('squatData')) || {
        exerciseName: 'squat',
        reps: null,
        exerciseWeight: null
      }
    };
    return obj;
  }

  static saveWeekData(
    templateName: ProgramTemplateType,
    templateModification: string,
    cardTitle: string,
    weekData: Array<Array<boolean>>
  ): Array<Array<boolean>> {
    localForage.setItem(
      `${templateName}${templateModification}${cardTitle}`,
      weekData
    );
    return weekData;
  }

  static async getWeekData(
    templateName: ProgramTemplateType,
    templateModification: string,
    cardTitle: string
  ): Promise<Array<Array<boolean>> | null> {
    return localForage.getItem(
      `${templateName}${templateModification}${cardTitle}`
    );
  }
}
