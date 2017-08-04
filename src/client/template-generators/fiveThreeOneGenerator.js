// @flow
import type { GeneratorInterface } from './GeneratorInterface';
import type { ScheduleCardDataType } from '../types';

export default class FiveThreeOneGenerator implements GeneratorInterface {
  static getTemplateData(
    benchPressWeight: ?number,
    deadliftWeight: ?number,
    overheadPressWeight: ?number,
    squatWeight: ?number,
    roundingFunc: (num: number) => number,
    accesory: 'The Triumvirate' | 'Boring but Big'
  ): { data: Array<ScheduleCardDataType> } {
    const weekOneSetsGenerator = (exerciseWeight: ?number) =>
      typeof exerciseWeight === 'number'
        ? [
          `${roundingFunc(exerciseWeight * 0.4)} x 5`,
          `${roundingFunc(exerciseWeight * 0.5)} x 5`,
          `${roundingFunc(exerciseWeight * 0.6)} x 3`,
          `${roundingFunc(exerciseWeight * 0.65)} x 5`,
          `${roundingFunc(exerciseWeight * 0.75)} x 5`,
          `${roundingFunc(exerciseWeight * 0.85)} x 5+`
        ]
        : Array(6).fill('–');

    const weekTwoSetsGenerator = (exerciseWeight: ?number) =>
      typeof exerciseWeight === 'number'
        ? [
          `${roundingFunc(exerciseWeight * 0.4)} x 5`,
          `${roundingFunc(exerciseWeight * 0.5)} x 5`,
          `${roundingFunc(exerciseWeight * 0.6)} x 3`,
          `${roundingFunc(exerciseWeight * 0.7)} x 3`,
          `${roundingFunc(exerciseWeight * 0.8)} x 3`,
          `${roundingFunc(exerciseWeight * 0.9)} x 3+`
        ]
        : Array(6).fill('–');

    const weekThreeSetsGenerator = (exerciseWeight: ?number) =>
      typeof exerciseWeight === 'number'
        ? [
          `${roundingFunc(exerciseWeight * 0.4)} x 5`,
          `${roundingFunc(exerciseWeight * 0.5)} x 5`,
          `${roundingFunc(exerciseWeight * 0.6)} x 5`,
          `${roundingFunc(exerciseWeight * 0.75)} x 5`,
          `${roundingFunc(exerciseWeight * 0.85)} x 3`,
          `${roundingFunc(exerciseWeight * 0.95)} x 1+`
        ]
        : Array(6).fill('–');

    const weekFourSetsGenerator = (exerciseWeight: ?number) =>
      typeof exerciseWeight === 'number'
        ? [
          `${roundingFunc(exerciseWeight * 0.4)} x 5`,
          `${roundingFunc(exerciseWeight * 0.5)} x 5`,
          `${roundingFunc(exerciseWeight * 0.6)} x 5`
        ]
        : Array(3).fill('–');

    const weeksFuncArr = [
      weekOneSetsGenerator,
      weekTwoSetsGenerator,
      weekThreeSetsGenerator
    ];
    const weeks = weeksFuncArr.map((setsGenerator, i) => {
      const overheadPressSets = setsGenerator(overheadPressWeight);
      const deadliftSets = setsGenerator(deadliftWeight);
      const benchPressSets = setsGenerator(benchPressWeight);
      const squatSets = setsGenerator(squatWeight);

      const phases = [
        {
          name: 'Warm Up',
          setCount: 3,
          rowContent: [
            [
              overheadPressSets[0],
              deadliftSets[0],
              benchPressSets[0],
              squatSets[0]
            ],
            [
              overheadPressSets[1],
              deadliftSets[1],
              benchPressSets[1],
              squatSets[1]
            ],
            [
              overheadPressSets[2],
              deadliftSets[2],
              benchPressSets[2],
              squatSets[2]
            ]
          ]
        },
        {
          name: '5 / 3 / 1',
          setCount: 3,
          rowContent: [
            [
              overheadPressSets[3],
              deadliftSets[3],
              benchPressSets[3],
              squatSets[3]
            ],
            [
              overheadPressSets[4],
              deadliftSets[4],
              benchPressSets[4],
              squatSets[4]
            ],
            [
              overheadPressSets[5],
              deadliftSets[5],
              benchPressSets[5],
              squatSets[5]
            ]
          ]
        }
      ];

      switch (accesory) {
        case 'The Triumvirate':
          phases.push({
            name: 'The Triumvirate',
            setCount: 2,
            rowContent: [
              [
                'Dips\n5 x 15',
                'Good Mornings\n5 x 12',
                'Dumbbell Chest Press\n5 x 15',
                'Leg Press\n5 x 15'
              ],
              [
                'Chin Ups\n5 x 10',
                'Hanging Leg Raises\n5 x 15',
                '	Dumbbell Rows\n5 x 10',
                'Leg Curls\n5 x 10'
              ]
            ]
          });
          break;
        case 'Boring but Big':
          phases.push({
            name: 'Boring but Big',
            setCount: 2,
            rowContent: [
              [
                'Overhead Press\n5 x 10',
                'Dead Lift\n5 x 10',
                'Bench Press\n5 x 10',
                'Squat Press\n5 x 10'
              ],
              [
                'Lateral Work\n5 x 10',
                'Abs\n5 x 10',
                'Lateral Work\n5 x 10',
                'Abs\n5 x 10'
              ]
            ]
          });
          break;
        default:
          throw new Error(`Given accesory ${accesory} and did not fit default`);
      }

      return {
        cardTitle: `Week ${i + 1}`,
        columnHeaders: [
          'Day 1\nOverhead Press',
          'Day 2\nDeadlift',
          'Day 3\nBench Press',
          'Day 4\nSquat'
        ],
        phases
      };
    });
    // Adds on deload week
    const overheadPressSets = weekFourSetsGenerator(overheadPressWeight);
    const deadliftSets = weekFourSetsGenerator(deadliftWeight);
    const benchPressSets = weekFourSetsGenerator(benchPressWeight);
    const squatSets = weekFourSetsGenerator(squatWeight);
    const deloadWeek = {
      cardTitle: 'Week 4',
      columnHeaders: [
        'Day 1\nOverhead Press',
        'Day 2\nDeadlift',
        'Day 3\nBench Press',
        'Day 4\nSquat'
      ],
      phases: [
        {
          name: 'Deload',
          setCount: 3,
          rowContent: [
            [
              overheadPressSets[0],
              deadliftSets[0],
              benchPressSets[0],
              squatSets[0]
            ],
            [
              overheadPressSets[1],
              deadliftSets[1],
              benchPressSets[1],
              squatSets[1]
            ],
            [
              overheadPressSets[2],
              deadliftSets[2],
              benchPressSets[2],
              squatSets[2]
            ]
          ]
        }
      ]
    };

    weeks.push(deloadWeek);

    return {
      data: weeks
    };
  }

  static getTemplateInfo() {
    return 'LOREM IPSUM TEMPLATE INFO';
  }

  static getTemplateModifications() {
    return ['The Triumvirate', 'Boring but Big'];
  }

  static roundTo(roundingNumber: number) {
    return arg => roundingNumber * Math.round(arg / roundingNumber);
  }
}
