// @flow
import type { StrengthStandardsType } from '../types';

export default function getDeadliftStandards(
  weight: number
): StrengthStandardsType {
  return {
    untrained: Math.round(
      -90.39365 +
        2.311359 * weight -
        0.006718996 * weight ** 2 +
        0.000006670664 * weight ** 3
    ),
    novice: Math.round(
      -151.331 +
        4.045437 * weight -
        0.01126525 * weight ** 2 +
        0.00001051854 * weight ** 3
    ),
    intermediate: Math.round(
      -192.2271 +
        4.850264 * weight -
        0.01355166 * weight ** 2 +
        0.0000124415 * weight ** 3
    ),
    advanced: Math.round(
      -240.1869 +
        6.75806 * weight -
        0.02033099 * weight ** 2 +
        0.00002025135 * weight ** 3
    ),
    elite: Math.round(
      -370.9264 +
        10.13514 * weight -
        0.03579004 * weight ** 2 +
        0.00004294107 * weight ** 3
    )
  };
}
