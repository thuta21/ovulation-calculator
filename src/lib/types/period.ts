export interface PeriodPrediction {
  startDate: Date;
  endDate: Date;
}

export interface CyclePhase {
  name: string;
  startDay: number;
  endDay: number;
  type: 'follicular_early' | 'follicular_late' | 'luteal_early' | 'luteal_late';
  color: string;
}