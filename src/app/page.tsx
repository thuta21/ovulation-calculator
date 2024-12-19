'use client'

import { useState } from 'react'
import Calendar from '@/components/Calendar'
import CalculatorForm from '@/components/CalculatorForm'
import Facts from '@/components/Facts'
import HealthInfoSection from '@/components/HealthInfo'
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/CustomComponents'
// import './global.css'

interface CycleData {
  periodDates: Date[]
  ovulationDate: Date
  fertileDates: Date[]
}

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  return (
    <Button onClick={toggleLanguage} className="mb-4">
      {language === 'en' ? 'မြန်မာ' : 'English'}
    </Button>
  )
}

function OvulationCalculatorContent() {
  const [cycleLength, setCycleLength] = useState(28)
  const [lastPeriodDate, setLastPeriodDate] = useState<Date | null>(null)
  const [periodDuration, setPeriodDuration] = useState(5)
  const [calculatedDates, setCalculatedDates] = useState<CycleData[] | null>(null)
  const { language } = useLanguage()

  const calculateDates = (lastPeriod: Date, cycleLen: number, periodDur: number) => {
    const cycles: CycleData[] = []
    let currentCycleStart = new Date(lastPeriod)

    for (let i = 0; i < 3; i++) {
      const periodDates: Date[] = []
      const fertileDates: Date[] = []
      const ovulationDate = new Date(currentCycleStart.getTime() + (cycleLen - 14) * 24 * 60 * 60 * 1000)

      for (let j = 0; j < periodDur; j++) {
        periodDates.push(new Date(currentCycleStart.getTime() + j * 24 * 60 * 60 * 1000))
      }

      for (let j = -5; j <= 1; j++) {
        fertileDates.push(new Date(ovulationDate.getTime() + j * 24 * 60 * 60 * 1000))
      }

      cycles.push({ periodDates, ovulationDate, fertileDates })
      currentCycleStart = new Date(currentCycleStart.getTime() + cycleLen * 24 * 60 * 60 * 1000)
    }

    setCalculatedDates(cycles)
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">
        {language === 'en' ? 'Ovulation Calculator' : 'သန္ဓေတည်ချိန် တွက်ချက်ရန်'}
      </h1>
      <div className="flex justify-center mb-4">
        <LanguageToggle />
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CalculatorForm
              cycleLength={cycleLength}
              setCycleLength={setCycleLength}
              lastPeriodDate={lastPeriodDate}
              setLastPeriodDate={setLastPeriodDate}
              periodDuration={periodDuration}
              setPeriodDuration={setPeriodDuration}
              onCalculate={() => {
                if (lastPeriodDate) {
                  calculateDates(lastPeriodDate, cycleLength, periodDuration)
                }
              }}
            />
            <Facts />
          </div>
          <div className="lg:col-span-2">
            {calculatedDates ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {calculatedDates.map((cycleData, index) => (
                  <Calendar key={index} calculatedDates={cycleData} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                {language === 'en'
                  ? 'Enter your cycle information and click Calculate to see predictions for the next 3 months.'
                  : 'သင့်ရာသီစက်ဝန်း အချက်အလက်များကို ဖြည့်သွင်းပြီး နောက်လာမည့် ၃ လအတွက် ခန့်မှန်းချက်များကို ကြည့်ရှုရန် တွက်ချက်မည် ခလုတ်ကို နှိပ်ပါ။'}
              </div>
            )}
          </div>
        </div>
        <HealthInfoSection />
      </div>
    </div>
  )
}

export default function OvulationCalculator() {
  return (
    <LanguageProvider>
      <OvulationCalculatorContent />
    </LanguageProvider>
  )
}

