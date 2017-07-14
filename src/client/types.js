// @flow
export type OrmFormulaType =
  | 'epley'
  | 'brzycki'
  | 'mcglothin'
  | 'lombardi'
  | 'mayhew et al.'
  | "o'Conner et al.";

export type ProgramTemplateType = '5/3/1' | 'startingStrength';

export type ExerciseType =
  | 'benchPress'
  | 'deadlift'
  | 'overheadPress'
  | 'squat';

export type ScheduleCardDataType = {
  cardTitle: string,
  columnHeaders: Array<string>,
  phases: Array<{
    name: string,
    rowContent: Array<Array<string>>,
    setCount: number
  }>
};
