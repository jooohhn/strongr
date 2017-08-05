// @flow
import type { ScheduleCardDataType } from '../types';

export interface GeneratorInterface {
  /**
	 * Returns an object containing data, which is to be used in
	 * ScheduleWrapper to create weekly workout schedules
	 */
  static getTemplateData: (
    benchPressWeight: ?number,
    deadliftWeight: ?number,
    overheadPressWeight: ?number,
    squatWeight: ?number,
    roundingFunc: (num: number) => number,
    accesory: string
  ) => { data: ScheduleCardDataType },

  static getTemplateInfo: () => string,

  static getTemplateModifications: () => Array<string>
}
