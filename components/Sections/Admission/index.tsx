import AdmissionCard from '../../AdmissionCard'

export const Admission = () => {
  return (
    <div className="flex justify-center rounded-3xl bg-light-dark p-20 pt-10">
      <div className="w-[752px]">
        <h1 className="mt-10 text-center text-[42px] font-semibold text-grey-darkest">
          Как поступить в школу
        </h1>
        <p className="mx-auto mb-12 w-[533px] text-center text-2xl text-grey">
          Поступление в школу состоит из нескольких простых шагов
        </p>
        <div className="flex flex-col gap-5">
          {admissionSteps.map((step, i) => (
            <AdmissionCard {...step} index={i + 1} key={step.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

const admissionSteps = [
  { description: 'Получаем вашу заявку на поступление' },
  { description: 'Телефонная консультация родителя' },
  { description: 'Тур по школе', info: 'по желанию' },
  { description: 'Педагогическая диагностика ребенка' },
  { description: 'Пробный день в школе', info: 'рекомендуется' },
  { description: 'Заключение договора' },
]
