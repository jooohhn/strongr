// @flow
export function fiveThreeOneGenerator(overheadPress: number, deadlift: number, benchPress: number, squats: number) {
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

  return {
    week1: {
      day1: {
        warmup: warmupGenerator(overheadPress),
        main: {
          set1: `${overheadPress * 0.4} x 5`,
          set2: `${overheadPress * 0.5} x 5`,
          set3: `${overheadPress * 0.6} x 3`
        }
      }
    }
  };

  // return {
  //   headers: [],
  //   groups: [
  //     {
  //       groupName: 'Warm Up',
  //       content: [

  //       ]
  //     }
  //   ]
  // };
}

export function startingStrengthGenerator() {

}
