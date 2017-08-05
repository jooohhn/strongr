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
    templateModification: TemplateModificationType
  ): { data: Array<ScheduleCardDataType> } {
    const roundingFunc = roundTo(roundingNumber);
    switch (template) {
      case '5/3/1':
        if (
          templateModification !== 'The Triumvirate' &&
          templateModification !== 'Boring but Big'
        ) {
          throw new Error(
            `5/3/1 erroneously given templateModification ${templateModification}`
          );
        }
        return FiveThreeOneGenerator.getTemplateData(
          benchPressWeight,
          deadliftWeight,
          overheadPressWeight,
          squatWeight,
          roundingFunc,
          templateModification
        );
      case 'Smolov Jr.':
        if (
          templateModification !== 'Smolov Jr. Bench' &&
          templateModification !== 'Smolov Jr. Squat'
        ) {
          throw new Error(
            `Smolov Jr. erroneously given templateModification ${templateModification}`
          );
        }
        return SmolovJrGenerator.getTemplateData(
          benchPressWeight,
          deadliftWeight,
          overheadPressWeight,
          squatWeight,
          roundingFunc,
          templateModification
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
