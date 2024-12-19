import { differenceInDays, startOfDay } from "date-fns";

export function getDaysBetween(startDate: Date, endDate: Date): number {
  return differenceInDays(startOfDay(endDate), startOfDay(startDate));
}

export function normalizeDate(date: Date): Date {
  return startOfDay(date);
}