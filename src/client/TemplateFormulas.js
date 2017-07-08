// @flow
export function fiveThreeOneGenerator(
  overheadPress: number,
  deadlift: number,
  benchPress: number,
  squats: number
) {
  const warmupGenerator = (exerciseWeight: number) => [
    `${exerciseWeight * 0.4} x 5`,
    `${exerciseWeight * 0.5} x 5`,
    `${exerciseWeight * 0.6} x 3`
  ];

  const ThreeByFiveGenerator = (exerciseWeight: number) => [
    `${exerciseWeight * 0.4} x 5`,
    `${exerciseWeight * 0.5} x 5`,
    `${exerciseWeight * 0.6} x 3`
  ];

  // @TODO: - need to make sure sum of rowspan - 2 === sets.length
  //        - Create types for all of these

  const phases = [
    {
      name: 'Warm Up',
      setCount: 3
    },
    {
      name: '5 / 3 / 1',
      setCount: 3
    }
  ];

  const days = [
    {
      day: 1,
      name: 'Overhead Press',
      sets: ['60 x 5', '75 x 5', '85 x 3', '95 x 5', '110 x 5', '125 x 5+']
    },
    {
      day: 2,
      name: 'Deadlift',
      sets: ['160 x 5', '200 x 5', '240 x 3', '255 x 5', '290 x 5', '335 x 5+']
    },
    {
      day: 3,
      name: 'Bench Press',
      sets: ['160 x 5', '200 x 5', '240 x 3', '255 x 5', '290 x 5', '335 x 5+']
    },
    {
      day: 4,
      name: 'Squat',
      sets: ['135 x 5', '170 x 5', '205 x 3', '220 x 5', '255 x 5', '290 x 5+']
    }
  ];

  return {
    phases,
    days
  };
}

export function startingStrengthGenerator() {}
