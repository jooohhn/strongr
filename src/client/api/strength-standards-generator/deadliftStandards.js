// @flow
import type { StrengthStandardsType } from '../../types';

export default function getDeadliftStandards(
  bodyweight: number
): StrengthStandardsType {
  return {
    exerciseName: 'deadlift',
    untrained: Math.round(
      -90.39365 +
        2.311359 * bodyweight -
        0.006718996 * bodyweight ** 2 +
        0.000006670664 * bodyweight ** 3
    ),
    novice: Math.round(
      -151.331 +
        4.045437 * bodyweight -
        0.01126525 * bodyweight ** 2 +
        0.00001051854 * bodyweight ** 3
    ),
    intermediate: Math.round(
      -192.2271 +
        4.850264 * bodyweight -
        0.01355166 * bodyweight ** 2 +
        0.0000124415 * bodyweight ** 3
    ),
    advanced: Math.round(
      -240.1869 +
        6.75806 * bodyweight -
        0.02033099 * bodyweight ** 2 +
        0.00002025135 * bodyweight ** 3
    ),
    elite: Math.round(
      -370.9264 +
        10.13514 * bodyweight -
        0.03579004 * bodyweight ** 2 +
        0.00004294107 * bodyweight ** 3
    )
  };
}
