'use client'

import { Dispatch, SetStateAction } from 'react'
import { Button, Input, Label } from './CustomComponents'
import { useLanguage } from '../contexts/LanguageContext'

interface CalculatorFormProps {
  cycleLength: number
  setCycleLength: Dispatch<SetStateAction<number>>
  lastPeriodDate: Date | null
  setLastPeriodDate: Dispatch<SetStateAction<Date | null>>
  periodDuration: number
  setPeriodDuration: Dispatch<SetStateAction<number>>
  onCalculate: () => void
}

export default function CalculatorForm({
  cycleLength,
  setCycleLength,
  lastPeriodDate,
  setLastPeriodDate,
  periodDuration,
  setPeriodDuration,
  onCalculate,
}: CalculatorFormProps) {
  const { language } = useLanguage()

  const labels = {
    en: {
      cycleLength: 'Cycle Length (days)',
      periodDuration: 'Total Days of Period',
      lastPeriodDate: 'Last Period Start Date',
      calculate: 'Calculate',
    },
    my: {
      cycleLength: 'ရာသီစက်ဝန်း အရှည် (ရက်)',
      periodDuration: 'ရာသီလာသည့် စုစုပေါင်းရက်',
      lastPeriodDate: 'နောက်ဆုံးရာသီလာသည့်ရက်',
      calculate: 'တွက်ချက်မည်',
    },
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="cycleLength">{labels[language].cycleLength}</Label>
        <Input
          id="cycleLength"
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number(e.target.value))}
          min={21}
          max={35}
        />
      </div>
      <div>
        <Label htmlFor="periodDuration">{labels[language].periodDuration}</Label>
        <Input
          id="periodDuration"
          type="number"
          value={periodDuration}
          onChange={(e) => setPeriodDuration(Number(e.target.value))}
          min={1}
          max={10}
        />
      </div>
      <div>
        <Label htmlFor="lastPeriodDate">{labels[language].lastPeriodDate}</Label>
        <Input
          id="lastPeriodDate"
          type="date"
          value={lastPeriodDate ? lastPeriodDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setLastPeriodDate(new Date(e.target.value))}
        />
      </div>
      <Button onClick={onCalculate} className="w-full">{labels[language].calculate}</Button>
    </div>
  )
}

