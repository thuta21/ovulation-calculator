import { differenceInDays, startOfDay } from "date-fns";
import { PeriodPrediction } from "./period-utils";

export function getPeriodDayMessage(
  date: Date,
  prediction: PeriodPrediction
): string {
  const normalizedDate = startOfDay(date);
  const normalizedStartDate = startOfDay(prediction.startDate);
  const dayNumber = differenceInDays(normalizedDate, normalizedStartDate) + 1;

  switch (dayNumber) {
    case 1:
      return "First day of your period. Take it easy and stay hydrated! 💜";
    case 2:
      return "Day 2 - Flow might be heavier. Remember to rest and take care of yourself! 💪";
    case 3:
      return "Day 3 - You're halfway there! Keep going strong! ✨";
    case 4:
      return "Day 4 - Almost through! Your body is doing great! 🌸";
    case 5:
      return "Day 5 - The end is in sight! You've got this! 🎉";
    default:
      return "Period day - Listen to your body and take care! 💕";
  }
}

export function getPredictionForDate(
  date: Date,
  predictions: PeriodPrediction[]
): PeriodPrediction | undefined {
  const normalizedDate = startOfDay(date);
  return predictions.find((prediction) => {
    const startDay = startOfDay(prediction.startDate);
    const endDay = startOfDay(prediction.endDate);
    return normalizedDate >= startDay && normalizedDate <= endDay;
  });
}