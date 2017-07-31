// @flow
export type OrmFormulaType = 'epley';

export type ProgramTemplateType = '5/3/1' | 'Starting Strength';

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

// Used in strength-standards-generator
export type StrengthStandardsType = {
  exerciseName: ExerciseType,
  untrained: number,
  novice: number,
  intermediate: number,
  advanced: number,
  elite: number
};
