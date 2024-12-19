import { useLanguage } from '../contexts/LanguageContext'

export default function Facts() {
  const { language } = useLanguage()

  const facts = {
    en: [
      {
        title: "Early Follicular Phase (menstruation)",
        description: "(Days 1-7, First week)"
      },
      {
        title: "Late Follicular Phase",
        description: "(Days 8-14, Second week)"
      },
      {
        title: "Early Luteal Phase",
        description: "(Days 15-21, Third week)"
      },
      {
        title: "Late Luteal Phase",
        description: "(Days 22-28, Fourth week)"
      }
    ],
    my: [
      {
        title: "ပထမ Follicular အဆင့် (ရာသီလာချိန်)",
        description: "(၁ရက်မှ၇ရက်အထိ ပထမအပတ်)"
      },
      {
        title: "နောက်ဆုံး Follicular အဆင့်",
        description: "(၈ရက်မှ ၁၄ရက်အထိ ဒုတိယအပတ်)"
      },
      {
        title: "ပထမ Luteal အဆင့်",
        description: "(၁၅ရက်မှ ၂၁ရက်အထိ တတိယအပတ်)"
      },
      {
        title: "နောက်ဆုံး Luteal အဆင့်",
        description: "(၂၂ရက်မှ ၂၈ ရက်အထိ စတုတ္ထအပတ်)"
      }
    ]
  }

  return (
    <div className="mt-8 bg-purple-100 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-purple-800">
        {language === 'en' ? 'Menstrual Cycle' : 'ရာသီစက်ဝန်း'}
      </h2>
      <ul className="space-y-2 text-sm">
        {facts[language].map((fact, index) => (
          <li key={index}>
            <span className="font-semibold">{fact.title}:</span>
            <br />
            {fact.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

