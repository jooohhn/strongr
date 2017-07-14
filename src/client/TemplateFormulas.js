// @flow

const roundToFives = num => 5 * Math.round(num / 5);

// Week -> Day -> Phases -> Day
export function fiveThreeOneGenerator(
  benchPressWeight: ?number,
  deadliftWeight: ?number,
  overheadPressWeight: ?number,
  squatWeight: ?number
) {
  const weekOneSets = (exerciseWeight: ?number) =>
    typeof exerciseWeight === 'number'
      ? [
        `${roundToFives(exerciseWeight * 0.4)} x 5`,
        `${roundToFives(exerciseWeight * 0.5)} x 5`,
        `${roundToFives(exerciseWeight * 0.6)} x 3`,
        `${roundToFives(exerciseWeight * 0.65)} x 5`,
        `${roundToFives(exerciseWeight * 0.75)} x 5`,
        `${roundToFives(exerciseWeight * 0.85)} x 5+`
      ]
      : Array(6).fill('–');

  const weekTwoSets = (exerciseWeight: ?number) =>
    typeof exerciseWeight === 'number'
      ? [
        `${roundToFives(exerciseWeight * 0.4)} x 5`,
        `${roundToFives(exerciseWeight * 0.5)} x 5`,
        `${roundToFives(exerciseWeight * 0.6)} x 3`,
        `${roundToFives(exerciseWeight * 0.7)} x 3`,
        `${roundToFives(exerciseWeight * 0.8)} x 3`,
        `${roundToFives(exerciseWeight * 0.9)} x 3+`
      ]
      : Array(6).fill('–');

  const weekThreeSets = (exerciseWeight: ?number) =>
    typeof exerciseWeight === 'number'
      ? [
        `${roundToFives(exerciseWeight * 0.4)} x 5`,
        `${roundToFives(exerciseWeight * 0.5)} x 5`,
        `${roundToFives(exerciseWeight * 0.6)} x 5`,
        `${roundToFives(exerciseWeight * 0.75)} x 5`,
        `${roundToFives(exerciseWeight * 0.85)} x 3`,
        `${roundToFives(exerciseWeight * 0.95)} x 1+`
      ]
      : Array(6).fill('–');

  const weekFourSets = (exerciseWeight: ?number) =>
    typeof exerciseWeight === 'number'
      ? [
        `${roundToFives(exerciseWeight * 0.4)} x 5`,
        `${roundToFives(exerciseWeight * 0.5)} x 5`,
        `${roundToFives(exerciseWeight * 0.6)} x 5`
      ]
      : Array(3).fill('–');

  // @TODO: - need to make sure sum of rowspan - 2 === sets.length
  //        - Create types for all of these

  const weeksFuncArr = [weekOneSets, weekTwoSets, weekThreeSets];

  const standardWeeks = weeksFuncArr.map((setsGenerator, i) => {
    const overheadPressSets = setsGenerator(overheadPressWeight);
    const deadliftSets = setsGenerator(deadliftWeight);
    const benchPressSets = setsGenerator(benchPressWeight);
    const squatSets = setsGenerator(squatWeight);
    return {
      cardTitle: `Week ${i + 1}`,
      phases: [
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
      ]
    };
  });

  const overheadPressSets = weekFourSets(overheadPressWeight);
  const deadliftSets = weekFourSets(deadliftWeight);
  const benchPressSets = weekFourSets(benchPressWeight);
  const squatSets = weekFourSets(squatWeight);
  const deloadWeek = {
    cardTitle: 'Week 4',
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

  standardWeeks.push(deloadWeek);

  return {
    columnHeaders: [
      'Day 1\nOverhead Press',
      'Day 2\nDeadlift',
      'Day 3\nBench Press',
      'Day 4\nSquat'
    ],
    data: standardWeeks
  };
}

export function startingStrengthGenerator() {}