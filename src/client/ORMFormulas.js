// @flow
/* eslint no-mixed-operators: 0 */
/* NOTE: All calculations assumed to be in lbs */

const ormFormulas = {
  epley: (reps: ?number, weight: ?number): ?number => {
    // Below conditional used in
    if (reps == null || weight == null) {
      return null;
    }

    if (reps <= 0 || weight <= 0) {
      throw new Error("Reps and weight shouldn't be <= 0");
    }

    return Math.floor(weight * (1 + reps / 30));
  }
};

export default ormFormulas;
