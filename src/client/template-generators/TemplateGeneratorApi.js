// @flow
import FiveThreeOneGenerator from './FiveThreeOneGenerator';
import SmolovJrGenerator from './SmolovJrGenerator';
import type {
  ProgramTemplateType,
  ScheduleCardDataType,
  TemplateModificationType
} from '../types';

function roundTo(roundingNumber: number) {
  return arg => roundingNumber * Math.round(arg / roundingNumber);
}

/**
 * Controller between the TemplateGenerators and the front end
 */
export default class TemplateGeneratorApi {
  static getTemplateData(
    template: ProgramTemplateType,
    benchPressWeight: ?number,
    deadliftWeight: ?number,
    overheadPressWeight: ?number,
    squatWeight: ?number,
    roundingNumber: number,
    accesory: string
  ): { data: Array<ScheduleCardDataType> } {
    const roundingFunc = roundTo(roundingNumber);
    switch (template) {
      case '5/3/1':
        return FiveThreeOneGenerator.getTemplateData(
          benchPressWeight,
          deadliftWeight,
          overheadPressWeight,
          squatWeight,
          roundingFunc,
          accesory
        );
      case 'Smolov Jr.':
        return SmolovJrGenerator.getTemplateData(
          benchPressWeight,
          deadliftWeight,
          overheadPressWeight,
          squatWeight,
          roundingFunc,
          accesory
        );
      default:
        throw new Error(`Template ${template} give, which is not supported`);
    }
  }

  static getTemplateInfo(template: ProgramTemplateType): string {
    switch (template) {
      case '5/3/1':
        return FiveThreeOneGenerator.getTemplateInfo();
      case 'Smolov Jr.':
        return SmolovJrGenerator.getTemplateInfo();
      default:
        throw new Error(`Template ${template} give, which is not supported`);
    }
  }

  static getTemplateModifications(
    template: ProgramTemplateType
  ): Array<TemplateModificationType> {
    switch (template) {
      case '5/3/1':
        return FiveThreeOneGenerator.getTemplateModifications();
      case 'Smolov Jr.':
        return SmolovJrGenerator.getTemplateModifications();
      default:
        throw new Error(`Template ${template} give, which is not supported`);
    }
  }
}
