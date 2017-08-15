// @flow
import type { GeneratorInterface } from './GeneratorInterface';
import type { ScheduleCardDataType } from '../../types';

export default class SmolovJrGenerator implements GeneratorInterface {
  static getTemplateData(
    benchPressWeight: ?number,
    deadliftWeight: ?number,
    overheadPressWeight: ?number,
    squatWeight: ?number,
    roundingFunc: (num: number) => number,
    templateModification: 'Smolov Jr. Bench' | 'Smolov Jr. Squat'
  ): { data: Array<ScheduleCardDataType> } {
    const dayOneGenerator = (baseWeight: ?number, additionalWeight: number) =>
      typeof baseWeight === 'number'
        ? [
          `${roundingFunc(baseWeight * 0.7) + additionalWeight} x 6`,
          `${roundingFunc(baseWeight * 0.7) + additionalWeight} x 6`,
          `${roundingFunc(baseWeight * 0.7) + additionalWeight} x 6`,
          `${roundingFunc(baseWeight * 0.7) + additionalWeight} x 6`,
          `${roundingFunc(baseWeight * 0.7) + additionalWeight} x 6`,
          `${roundingFunc(baseWeight * 0.7) + additionalWeight} x 6`,
          '-',
          '-',
          '-',
          '-'
        ]
        : Array(10).fill('–');

    const dayTwoGenerator = (baseWeight: ?number, additionalWeight: number) =>
      typeof baseWeight === 'number'
        ? [
          `${roundingFunc(baseWeight * 0.75) + additionalWeight} x 5`,
          `${roundingFunc(baseWeight * 0.75) + additionalWeight} x 5`,
          `${roundingFunc(baseWeight * 0.75) + additionalWeight} x 5`,
          `${roundingFunc(baseWeight * 0.75) + additionalWeight} x 5`,
          `${roundingFunc(baseWeight * 0.75) + additionalWeight} x 5`,
          `${roundingFunc(baseWeight * 0.75) + additionalWeight} x 5`,
          `${roundingFunc(baseWeight * 0.75) + additionalWeight} x 5`,
          '-',
          '-',
          '-'
        ]
        : Array(10).fill('–');

    const dayThreeGenerator = (baseWeight: ?number, additionalWeight: number) =>
      typeof baseWeight === 'number'
        ? [
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          `${roundingFunc(baseWeight * 0.8) + additionalWeight} x 4`,
          '-',
          '-'
        ]
        : Array(10).fill('–');

    const dayFourGenerator = (baseWeight: ?number, additionalWeight: number) =>
      typeof baseWeight === 'number'
        ? [
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`,
          `${roundingFunc(baseWeight * 0.85) + additionalWeight} x 3`
        ]
        : Array(10).fill('–');

    const additionalWeights = [0, 10, 20];
    const exerciseUsed =
      templateModification === 'Smolov Jr. Bench'
        ? benchPressWeight
        : squatWeight;

    const weeks = additionalWeights.map((additionalWeight, i) => {
      const dayOneSets = dayOneGenerator(exerciseUsed, additionalWeight);
      const dayTwoSets = dayTwoGenerator(exerciseUsed, additionalWeight);
      const dayThreeSets = dayThreeGenerator(exerciseUsed, additionalWeight);
      const dayFourSets = dayFourGenerator(exerciseUsed, additionalWeight);

      const phases = [
        {
          name: 'Warm Up',
          setCount: 3,
          rowContent:
            typeof exerciseUsed === 'number'
              ? [
                Array(4).fill(`${roundingFunc(exerciseUsed * 0.4)} x 10`),
                Array(4).fill(`${roundingFunc(exerciseUsed * 0.5)} x 10`),
                Array(4).fill(`${roundingFunc(exerciseUsed * 0.6)} x 10`)
              ]
              : [Array(4).fill('-'), Array(4).fill('-'), Array(4).fill('-')]
        },
        {
          name:
            templateModification === 'Smolov Jr. Bench'
              ? 'Smolov Jr.\nBench'
              : 'Smolov Jr.\nSquat',
          setCount: 10,
          rowContent: [
            [dayOneSets[0], dayTwoSets[0], dayThreeSets[0], dayFourSets[0]],
            [dayOneSets[1], dayTwoSets[1], dayThreeSets[1], dayFourSets[1]],
            [dayOneSets[2], dayTwoSets[2], dayThreeSets[2], dayFourSets[2]],
            [dayOneSets[3], dayTwoSets[3], dayThreeSets[3], dayFourSets[3]],
            [dayOneSets[4], dayTwoSets[4], dayThreeSets[4], dayFourSets[4]],
            [dayOneSets[5], dayTwoSets[5], dayThreeSets[5], dayFourSets[5]],
            [dayOneSets[6], dayTwoSets[6], dayThreeSets[6], dayFourSets[6]],
            [dayOneSets[7], dayTwoSets[7], dayThreeSets[7], dayFourSets[7]],
            [dayOneSets[8], dayTwoSets[8], dayThreeSets[8], dayFourSets[8]],
            [dayOneSets[9], dayTwoSets[9], dayThreeSets[9], dayFourSets[9]]
          ]
        }
      ];

      return {
        cardTitle: `Week ${i + 1}`,
        columnHeaders: [
          'Day 1\nBench',
          'Day 2\nBench',
          'Day 3\nBench',
          'Day 4\nBench'
        ],
        columnCount: 4,
        phases
      };
    });
    return { data: weeks };
  }

  static getTemplateInfo() {
    return 'LOREM IPSUM SMOLOV JR. PLACEHODER';
  }

  static getTemplateModifications() {
    return ['Smolov Jr. Bench', 'Smolov Jr. Squat'];
  }
}
