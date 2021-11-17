export type CreateTimePointParam = {
  status: string;
};

type fetchDays = "0" | "1" | "2" | "3" | "4" | "5" | "6";
const FETCH_DAYS: (fetchDays | undefined)[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];

export type GetTimePointParamSumOfDays = {
  fetch_days: fetchDays;
};

export const FetchDaysFromString = (s: string): fetchDays => {
  const f = FETCH_DAYS.find((e) => e === s);

  if (f !== undefined) {
    return f;
  } else {
    return "0";
  }
};
