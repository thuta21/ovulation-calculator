'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Popover } from './CustomComponents'

interface CalendarProps {
  calculatedDates: {
    periodDates: Date[]
    ovulationDate: Date
    fertileDates: Date[]
  }
}

interface Message {
  en: string
  my: string
}

const periodMessages: Message[] = [
  { en: "Day 1: Take care, your period starts today.", my: "ပထမနေ့: ဂရုစိုက်ပါ၊ သင့်ရာသီစက်ဝန်း စတင်ပါပြီ။" },
  { en: "Day 2: Stay strong, girl! You've got this.", my: "ဒုတိယနေ့: ခွန်အားရှိပါစေ။ သင်လုပ်နိုင်ပါတယ်။" },
  { en: "Day 3: Remember to stay hydrated and rest if needed.", my: "တတိယနေ့: ရေများများသောက်ပြီး လိုအပ်ရင် နားနေပါ။" },
  { en: "Day 4: You're doing great! Keep taking care of yourself.", my: "စတုတ္ထနေ့: သင်အကောင်းဆုံးလုပ်နေပါတယ်။ ကိုယ့်ကိုယ်ကို ဆက်ဂရုစိုက်ပါ။" },
  { en: "Day 5: Almost there! Your body is amazing.", my: "ပဉ္စမနေ့: နီးပါးပြီ! သင့်ခန္ဓာကိုယ်က အံ့သြစရာပါ။" }
]

const defaultPeriodMessage: Message = {
  en: "Period day: Listen to your body and rest if needed.",
  my: "ရာသီလာချိန်: သင့်ခန္ဓာကိုယ်ကို နားထောင်ပြီး လိုအပ်ရင် နားနေပါ။"
}

export default function Calendar({ calculatedDates }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const { language } = useLanguage()

  useEffect(() => {
    if (calculatedDates.periodDates.length > 0) {
      setCurrentDate(new Date(calculatedDates.periodDates[0]))
    }
  }, [calculatedDates])

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const getDayClass = (date: Date) => {
    const { periodDates, ovulationDate, fertileDates } = calculatedDates

    if (periodDates.some(d => d.toDateString() === date.toDateString())) {
      return 'bg-red-200 hover:bg-red-300'
    }
    if (date.toDateString() === ovulationDate.toDateString()) {
      return 'bg-green-200 hover:bg-green-300'
    }
    if (fertileDates.some(d => d.toDateString() === date.toDateString())) {
      return 'bg-blue-200 hover:bg-blue-300'
    }
    return 'hover:bg-gray-100'
  }

  const getDayMessage = (date: Date): Message | null => {
    const { periodDates, ovulationDate, fertileDates } = calculatedDates

    if (periodDates.some(d => d.toDateString() === date.toDateString())) {
      const dayIndex = periodDates.findIndex(d => d.toDateString() === date.toDateString())
      return periodMessages[dayIndex] || defaultPeriodMessage
    }
    if (date.toDateString() === ovulationDate.toDateString()) {
      return {
        en: "Ovulation day: Highest chance of conception.",
        my: "သန္ဓေတည်နိုင်ချိန်: ကိုယ်ဝန်ရနိုင်ခြေ အမြင့်ဆုံးဖြစ်သည်။"
      }
    }
    if (fertileDates.some(d => d.toDateString() === date.toDateString())) {
      return {
        en: "Fertile day: High chance of conception.",
        my: "သန္ဓေတည်နိုင်သောနေ့: ကိုယ်ဝန်ရနိုင်ခြေ မြင့်မားသည်။"
      }
    }
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {currentDate.toLocaleString(language === 'en' ? 'en-US' : 'my-MM', { month: 'long', year: 'numeric' })}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold text-xs">
            {language === 'en' ? day : day[0]}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1)
          const dayClass = getDayClass(date)
          const dayMessage = getDayMessage(date)
          return (
            <Popover
              key={index}
              trigger={
                <div
                  className={`aspect-square flex items-center justify-center rounded-full cursor-pointer text-sm ${dayClass}`}
                >
                  {index + 1}
                </div>
              }
              content={
                dayMessage && (
                  <p className="font-semibold">{dayMessage[language]}</p>
                )
              }
            />
          )
        })}
      </div>
    </div>
  )
}

