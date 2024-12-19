import { addDays, format, isWithinInterval, startOfDay } from "date-fns";
import { PeriodPrediction } from "../types/period";

export function calculateNextPeriods(
  lastPeriod: Date,
  cycleLength: number,
  periodLength: number,
  numberOfPredictions: number = 3
): PeriodPrediction[] {
  const predictions: PeriodPrediction[] = [];
  let currentDate = startOfDay(lastPeriod);

  for (let i = 0; i < numberOfPredictions; i++) {
    if (i === 0) {
      predictions.push({
        startDate: currentDate,
        endDate: addDays(currentDate, periodLength - 1),
      });
    } else {
      currentDate = addDays(currentDate, cycleLength);
      predictions.push({
        startDate: currentDate,
        endDate: addDays(currentDate, periodLength - 1),
      });
    }
  }

  return predictions;
}

export function isPeriodDay(
  date: Date,
  predictions: PeriodPrediction[],
  periodLength: number
): boolean {
  const normalizedDate = startOfDay(date);
  return predictions.some((prediction) =>
    isWithinInterval(normalizedDate, {
      start: startOfDay(prediction.startDate),
      end: startOfDay(prediction.endDate),
    })
  );
}

export function formatDateRange(startDate: Date, endDate: Date): string {
  return `${format(startDate, "MMMM d, yyyy")} - ${format(
    endDate,
    "MMMM d, yyyy"
  )}`;
}