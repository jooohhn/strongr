// @flow
export type OrmFormulaType = 'wathan';

export type ProgramTemplateType = '5/3/1' | 'Smolov Jr.';

export type TemplateModificationType =
  | 'The Triumvirate'
  | 'Boring but Big'
  | 'Smolov Jr. Bench'
  | 'Smolov Jr. Squat';

export type ExerciseType =
  | 'benchPress'
  | 'deadlift'
  | 'overheadPress'
  | 'squat';

export type ScheduleCardDataType = {
  cardTitle: string,
  columnHeaders: Array<string>,
  columnCount: number,
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
