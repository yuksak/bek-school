import InfoBanner from '../../InfoBanner'
import image from '../../../public/images/hero.png'

export const Hero = () => {
  return (
    <InfoBanner image={image}>
      <div className="box-content flex w-[582px] flex-col gap-16 p-12 ">
        <p className="text-grey-darkest">
          В школу дети приходят учиться, и ничто не должно мешать им в этом. Наша цель - воспитать
          всесторонне развитую личность, обладающую собственным мнением, умеющая находить пути
          решения задач любой сложности, личность, которая быстро адаптируется к изменениям вокруг.
          <br />
          <br />
          &rdquo;Мы хотим видеть ребенка в поисках знаний, а не знания в погоне за ребенком&ldquo; -
          Бернард Шоу
        </p>
        <div>
          <h1 className="text-2xl font-bold text-grey-darkest">
            Исамухамедова Дильфуза Садриддиновна
          </h1>
          <p className="font-medium text-grey">
            Директор НОУ "Future education", школа &rdquo;Bek&ldquo;
          </p>
        </div>
      </div>
    </InfoBanner>
  )
}
