import { differenceInDays, startOfDay } from "date-fns";
import { CyclePhase } from "../types/period";

export function getCurrentPhase(lastPeriod: Date, cycleLength: number = 28): CyclePhase | null {
  const today = startOfDay(new Date());
  const cycleStart = startOfDay(lastPeriod);
  const dayInCycle = differenceInDays(today, cycleStart) % cycleLength + 1;
  return getPhaseForDayNumber(dayInCycle);
}

export function getPhaseForDate(date: Date, lastPeriod: Date, cycleLength: number = 28): CyclePhase | null {
  const targetDate = startOfDay(date);
  const cycleStart = startOfDay(lastPeriod);
  const dayInCycle = differenceInDays(targetDate, cycleStart) % cycleLength + 1;
  return getPhaseForDayNumber(dayInCycle);
}

export function getPhaseForDayNumber(dayInCycle: number): CyclePhase | null {
  const phases: CyclePhase[] = [
    { name: "Early Follicular", startDay: 1, endDay: 7, type: 'follicular_early', color: 'bg-red-200 hover:bg-red-300' },
    { name: "Late Follicular", startDay: 8, endDay: 14, type: 'follicular_late', color: 'bg-yellow-200 hover:bg-yellow-300' },
    { name: "Early Luteal", startDay: 15, endDay: 21, type: 'luteal_early', color: 'bg-green-200 hover:bg-green-300' },
    { name: "Late Luteal", startDay: 22, endDay: 28, type: 'luteal_late', color: 'bg-blue-200 hover:bg-blue-300' }
  ];

  return phases.find(phase => dayInCycle >= phase.startDay && dayInCycle <= phase.endDay) || null;
}

export function getDayMessage(date: Date, lastPeriod: Date, language: 'en' | 'my'): string {
  const cycleDay = differenceInDays(startOfDay(date), startOfDay(lastPeriod)) % 28 + 1;
  
  const messages = {
    en: {
      1: "First day of your period. Take it easy and stay hydrated! 💜",
      2: "Day 2 - Flow might be heavier. Remember to rest! 💪",
      3: "Day 3 - You're halfway there! Keep going strong! ✨",
      4: "Day 4 - Almost through! Your body is doing great! 🌸",
      5: "Day 5 - The end is in sight! You've got this! 🎉",
      14: "Ovulation day! You might feel more energetic! ⭐",
      28: "PMS might start soon. Practice self-care! 💕"
    },
    my: {
      1: "ရာသီပထမရက်။ အနားယူပြီး ရေများများသောက်ပါ! 💜",
      2: "ဒုတိယရက် - သွေးများနိုင်သည်။ အနားယူပါ! 💪",
      3: "တတိယရက် - တစ်ဝက်ရောက်ပြီ! ဆက်လက်ကြိုးစားပါ! ✨",
      4: "စတုတ္ထရက် - နီးလာပြီ! သင့်ခန္ဓာကိုယ် အံ့ဩစရာကောင်းနေသည်! 🌸",
      5: "ပဉ္စမရက် - အဆုံးနီးလာပြီ! သင်လုပ်နိုင်တယ်! 🎉",
      14: "ဥမှည့်ချိန်! ပိုပြီးကြွက်သားအားကောင်းနိုင်တယ်! ⭐",
      28: "PMS စတင်နိုင်သည်။ ကိုယ့်ကိုယ်ကို ဂရုစိုက်ပါ! 💕"
    }
  };

  return messages[language][cycleDay] || null;
}