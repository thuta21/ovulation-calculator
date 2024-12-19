import { differenceInDays, startOfDay } from 'date-fns';

export interface CyclePhase {
  name: string;
  startDay: number;
  endDay: number;
  type: 'follicular_early' | 'follicular_late' | 'luteal_early' | 'luteal_late';
}

export function getCurrentPhase(cycleStartDate: Date, cycleLength: number = 28): CyclePhase | null {
  const today = startOfDay(new Date());
  const cycleStart = startOfDay(cycleStartDate);
  const dayInCycle = differenceInDays(today, cycleStart) % cycleLength + 1;

  const phases: CyclePhase[] = [
    { name: "Early Follicular", startDay: 1, endDay: 7, type: 'follicular_early' },
    { name: "Late Follicular", startDay: 8, endDay: 14, type: 'follicular_late' },
    { name: "Early Luteal", startDay: 15, endDay: 21, type: 'luteal_early' },
    { name: "Late Luteal", startDay: 22, endDay: 28, type: 'luteal_late' }
  ];

  return phases.find(phase => dayInCycle >= phase.startDay && dayInCycle <= phase.endDay) || null;
}

export function getPhaseForDate(date: Date, cycleStartDate: Date, cycleLength: number = 28): CyclePhase | null {
  const targetDate = startOfDay(date);
  const cycleStart = startOfDay(cycleStartDate);
  const dayInCycle = differenceInDays(targetDate, cycleStart) % cycleLength + 1;

  const phases: CyclePhase[] = [
    { name: "Early Follicular", startDay: 1, endDay: 7, type: 'follicular_early' },
    { name: "Late Follicular", startDay: 8, endDay: 14, type: 'follicular_late' },
    { name: "Early Luteal", startDay: 15, endDay: 21, type: 'luteal_early' },
    { name: "Late Luteal", startDay: 22, endDay: 28, type: 'luteal_late' }
  ];

  return phases.find(phase => dayInCycle >= phase.startDay && dayInCycle <= phase.endDay) || null;
}
