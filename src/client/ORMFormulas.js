// @flow

/* NOTE: All calculations assumed to be in lbs */

const ormFormulas = {
  epley: (weight: number, reps: number) => {
    if (weight <= 0 || weight >= 1600 || reps <= 0) {
      throw new Error('You sure the inputs are right?');
    }
    return weight * ((1 + reps) / 30);
  }
};

export default ormFormulas;
