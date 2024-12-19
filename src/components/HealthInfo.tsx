'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

interface HealthInfoItem {
  question: string
  answer: string
}

interface HealthInfoProps {
  title: string
  items: HealthInfoItem[]
}

const HealthInfo: React.FC<HealthInfoProps> = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { language } = useLanguage()

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
          <button
            className="flex justify-between items-center w-full text-left font-semibold text-purple-700 hover:text-purple-900 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span>{item.question}</span>
            <ChevronDownIcon
              className={`w-5 h-5 transform transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="mt-2 text-gray-700 text-sm leading-relaxed">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function HealthInfoSection() {
  const { language } = useLanguage()

  const qaItems: HealthInfoItem[] = language === 'en' ? [
    {
      question: "What is ovulation?",
      answer: "Ovulation is the release of an egg from one of a woman's ovaries. It usually occurs about halfway through the menstrual cycle, although the exact timing can vary."
    },
    {
      question: "How long does a typical menstrual cycle last?",
      answer: "A typical menstrual cycle lasts about 28 days, but it can range from 21 to 35 days in adults and from 21 to 45 days in young teens."
    },
    {
      question: "What are the signs of ovulation?",
      answer: "Signs of ovulation can include changes in cervical mucus, a slight rise in basal body temperature, mild abdominal cramping, and increased sex drive."
    },
    {
      question: "How can I track my menstrual cycle?",
      answer: "You can track your menstrual cycle by marking the first day of your period on a calendar, using a period tracking app, or keeping a written diary of your cycle and symptoms."
    },
    {
      question: "What is PMS and when does it occur?",
      answer: "PMS (Premenstrual Syndrome) is a combination of symptoms that many women get about a week or two before their period. It can include mood swings, tender breasts, food cravings, fatigue, irritability and depression."
    }
  ] : [
    {
      question: "သန္ဓေတည်ခြင်းဆိုတာ ဘာလဲ။",
      answer: "သန္ဓေတည်ခြင်းဆိုသည်မှာ အမျိုးသမီး၏ သားဥအိမ်တစ်ခုမှ သားဥတစ်လုံး ထွက်လာခြင်းဖြစ်သည်။ ၎င်းသည် ရာသီစက်ဝန်း၏ တစ်ဝက်ခန့်တွင် ဖြစ်ပေါ်လေ့ရှိသော်လည်း အတိအကျ အချိန်သည် ကွဲပြားနိုင်ပါသည်။"
    },
    {
      question: "ပုံမှန်ရာသီစက်ဝန်းတစ်ခုသည် မည်မျှကြာမြင့်သနည်း။",
      answer: "ပုံမှန်ရာသီစက်ဝန်းတစ်ခုသည် ရက် ၂၈ ရက်ခန့်ကြာမြင့်သော်လည်း အရွယ်ရောက်ပြီးသူများတွင် ၂၁ ရက်မှ ၃၅ ရက်အထိ၊ ဆယ်ကျော်သက်အရွယ်များတွင် ၂၁ ရက်မှ ၄၅ ရက်အထိ ကြာမြင့်နိုင်ပါသည်။"
    },
    {
      question: "သန္ဓေတည်ခြင်း၏ လက္ခဏာများမှာ အဘယ်နည်း။",
      answer: "သန္ဓေတည်ခြင်း၏ လက္ခဏာများတွင် သားအိမ်ခေါင်းရည်ပြောင်းလဲခြင်း၊ ခန္ဓာကိုယ်အပူချိန် အနည်းငယ်မြင့်တက်ခြင်း၊ ဗိုက်အောင့်အနည်းငယ်ဖြစ်ခြင်းနှင့် လိင်စိတ်ပိုမိုတက်ကြွလာခြင်းတို့ ပါဝင်နိုင်ပါသည်။"
    },
    {
      question: "ကျွန်ုပ်၏ ရာသီစက်ဝန်းကို မည်သို့ ခြေရာခံနိုင်မည်နည်း။",
      answer: "သင့်ရာသီစက်ဝန်းကို ပြက္ခဒိန်တွင် သင့်ရာသီစတင်သည့်ရက်ကို မှတ်သားခြင်း၊ ရာသီခြေရာခံ အက်ပ်တစ်ခုကို အသုံးပြုခြင်း၊ သို့မဟုတ် သင့်စက်ဝန်းနှင့် ရောဂါလက္ခဏာများကို မှတ်တမ်းရေးသားထားခြင်းဖြင့် ခြေရာခံနိုင်ပါသည်။"
    },
    {
      question: "PMS ဆိုတာဘာလဲ၊ ဘယ်အချိန်မှာဖြစ်တာလဲ။",
      answer: "PMS (ရာသီမလာမီ ရောဂါလက္ခဏာစု) သည် အမျိုးသမီးအများစုတွင် ရာသီမလာမီ တစ်ပတ် သို့မဟုတ် နှစ်ပတ်ခန့်တွင် ဖြစ်ပေါ်လေ့ရှိသော ရောဂါလက္ခဏာများ ပေါင်းစပ်မှုဖြစ်သည်။ ၎င်းတွင် စိတ်အခြေအနေ ပြောင်းလဲခြင်း၊ ရင်သားနာကျင်ခြင်း၊ အစားအသောက် တပ်မက်ခြင်း၊ ပင်ပန်းနွမ်းနယ်ခြင်း၊ စိတ်တိုလွယ်ခြင်းနှင့် စိတ်ဓာတ်ကျဆင်းခြင်းတို့ ပါဝင်နိုင်ပါသည်။"
    }
  ]

  const articleItems: HealthInfoItem[] = language === 'en' ? [
    {
      question: "Understanding Your Menstrual Cycle",
      answer: "The menstrual cycle is a natural process that occurs in the female body, typically lasting about 28 days. It consists of four main phases: menstruation, the follicular phase, ovulation, and the luteal phase. Understanding these phases can help you predict your periods, identify your fertile window, and better manage your overall health."
    },
    {
      question: "Maintaining Menstrual Hygiene",
      answer: "Proper menstrual hygiene is crucial for your health and comfort. This includes changing your sanitary products regularly, washing your hands before and after changing products, and choosing the right products for your flow. It's also important to clean your genital area with water regularly and wear clean, breathable underwear."
    },
    {
      question: "Nutrition and Exercise During Your Cycle",
      answer: "Your nutritional needs and exercise capacity can vary throughout your menstrual cycle. During menstruation, you might benefit from iron-rich foods to replace lost iron. In the days leading up to your period, increasing calcium intake may help reduce PMS symptoms. Regular exercise can help alleviate cramps and mood swings, but listen to your body and adjust your routine as needed."
    }
  ] : [
    {
      question: "သင့်ရာသီစက်ဝန်းကို နားလည်ခြင်း",
      answer: "ရာသီစက်ဝန်းသည် အမျိုးသမီးခန္ဓာကိုယ်တွင် ဖြစ်ပေါ်သော သဘာဝဖြစ်စဉ်တစ်ခုဖြစ်ပြီး ပုံမှန်အားဖြင့် ရက် ၂၈ ရက်ခန့် ကြာမြင့်ပါသည်။ ၎င်းတွင် အဓိကအဆင့် ၄ ဆင့်ပါဝင်သည် - ရာသီလာခြင်း၊ follicular အဆင့်၊ သန္ဓေတည်ခြင်းနှင့် luteal အဆင့်တို့ဖြစ်သည်။ ဤအဆင့်များကို နားလည်ခြင်းဖြင့် သင့်ရာသီလာမည့်အချိန်ကို ခန့်မှန်းနိုင်ခြင်း၊ သင့်သန္ဓေတည်နိုင်သည့် အချိန်ကာလကို သိရှိနိုင်ခြင်းနှင့် သင့်ကျန်းမာရေးကို ပိုမိုကောင်းမွန်စွာ စီမံခန့်ခွဲနိုင်ခြင်းတို့ ပြုလုပ်နိုင်ပါသည်။"
    },
    {
      question: "ရာသီလာစဉ် သန့်ရှင်းရေးထိန်းသိမ်းခြင်း",
      answer: "ရာသီလာစဉ် သင့်လျော်သော သန့်ရှင်းရေးသည် သင့်ကျန်းမာရေးနှင့် သက်တောင့်သက်သာဖြစ်မှုအတွက် အရေးကြီးပါသည���။ ၎င်းတွင် သန့်ရှင်းရေးပစ္စည်းများကို ပုံမှန်လဲလှယ်ခြင်း၊ ပစ္စည်းများ မလဲလှယ်မီနှင့် လဲလှယ်ပြီးနောက် လက်ဆေးခြင်း၊ သင့်အတွက် သင့်လျော်သော ပစ္စည်းများကို ရွေးချယ်ခြင်းတို့ ပါဝင်ပါသည်။ မိန်းမကိုယ်ဧရိယာကို ရေဖြင့် ပုံမှန်သန့်စင်ပေးခြင်းနှင့် သန့်ရှင်းပြီး လေဝင်လေထွက်ကောင်းသော အတွင်းခံဝတ်ဆင်ခြင်းတို့လည်း အရေးကြီးပါသည်။"
    },
    {
      question: "သင့်ရာသီစက်ဝန်းအတွင်း အာဟာရနှင့် လေ့ကျင့်ခန်း",
      answer: "သင့်ရာသီစက်ဝန်းတစ်လျှောက် သင့်အာဟာရလိုအပ်ချက်နှင့် လေ့ကျင့်ခန်းလုပ်နိုင်စွမ်းသည် ပြောင်းလဲနိုင်ပါသည်။ ရာသီလာနေစဉ်အတွင်း သံဓာတ်ကြွယ်ဝသော အစားအစာများ စားသုံးခင်းသည် ဆုံးရှုံးသွားသော သံဓာတ်ကို ပြန်လည်ဖြည့်တင်းရန် အထောက်အကူပြုနိုင်ပါသည်။ ရာသီမလာမီ ရက်အနည်းငယ်အတွင်း ကယ်လ်ဆီယမ်ဓာတ်ပါဝင်သော အစားအစာများ စားသုံးခြင်းသည် PMS ရောဂါလက္ခဏာများကို လျှော့ချနိုင်ပါသည်။ ပုံမှန်လေ့ကျင့်ခန်းပြုလုပ်ခြင်းသည် ဗိုက်အောင့်ခြင်းနှင့် စိတ်အခြေအနေ ပြောင်းလဲခြင်းတို့ကို သက်သာစေနိုင်သော်လည်း သင့်ခန္ဓာကိုယ်၏ အချက်ပြမှုကို နားထောင်ပြီး လိုအပ်သလို သင့်လေ့ကျင့်ခန်းအစီအစဉ်ကို ချိန်ညှိသင့်ပါသည်။"
    }
  ]

  return (
    <>
      <HealthInfo title={language === 'en' ? "Frequently Asked Questions" : "မေးလေ့ရှိသော မေးခွန်းများ"} items={qaItems} />
      <HealthInfo title={language === 'en' ? "Health Articles" : "ကျန်းမာရေးဆိုင်ရာ ဆောင်းပါးများ"} items={articleItems} />
    </>
  )
}

