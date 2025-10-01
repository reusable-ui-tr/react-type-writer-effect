import { TimeWithUnit } from "../helpers/types";

export const getTimeMs = (timeWithUnit: TimeWithUnit): number => {
  if (timeWithUnit.endsWith("ms")) {
    return +timeWithUnit.slice(0, -2);
  }

  if (timeWithUnit.endsWith("s")) {
    const timeS = +timeWithUnit.slice(0, -1);
    return getMsFromS(timeS);
  }

  return 0;
};

export const getMsFromS = (timeS: number) => timeS * 1000;
export const getSFromMS = (timeMs: number) => timeMs / 1000;
