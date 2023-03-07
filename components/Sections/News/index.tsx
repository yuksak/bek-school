import { SectionTitle } from '../../UI'
import NewsCard from '../../NewsCard'

import photo1 from '../../../public/images/news-pic-1.png'
import photo2 from '../../../public/images/news-pic-2.png'
import photo3 from '../../../public/images/news-pic-3.png'
import photo4 from '../../../public/images/news-pic-4.png'

export const News = () => {
  return (
    <div className="mx-auto max-w-[1142px]">
      <SectionTitle title="Новости" path="/ss" />
      <div className="grid grid-flow-col grid-cols-4">
        {news.map((card) => (
          <NewsCard {...card} key={card.title} />
        ))}
      </div>
    </div>
  )
}

const news = [
  {
    image: photo1,
    title: 'Сколько стоит обучение в частных школах Ташкента?',
    description: 'В своём стремлении повысить качество жизни, они забывают, что экономическая...',
    date: '18 сентября 2022 г.',
  },
  {
    image: photo2,
    title: 'Как подготовить ребенка к первому классу?',
    description: 'В своём стремлении повысить качество жизни, они забывают, что экономическая...',
    date: '16 октября 2022 г.',
  },
  {
    image: photo3,
    title: 'Как учитель помогает развиваться ученику?',
    description: 'В своём стремлении повысить качество жизни, они забывают, что экономическая...',
    date: '22 ноября 2022 г.',
  },
  {
    image: photo4,
    title: 'Спортивные достижения шестиклассников',
    description: 'В своём стремлении повысить качество жизни, они забывают, что экономическая...',
    date: '30 октября 2022 г.',
  },
]
