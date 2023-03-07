import InfoBanner from '../../InfoBanner'
import aboutUsImage from '../../../public/images/sec-about-us.png'

export const AboutUs = () => {
  return (
    <div>
      <InfoBanner image={aboutUsImage}>
        <div className="box-content flex w-[582px] flex-col gap-3 p-12 pr-0 text-grey-darkest">
          <h1 className="text-4xl font-semibold">О нас</h1>
          <p>
            Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки
            проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках
            используются дополнительные материалы с разных источников- как российских, так и
            зарубежных изданий.
          </p>
          <p>
            Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки
            проводятся по учебной программе, утверждённой МНО.
          </p>
        </div>
      </InfoBanner>
    </div>
  )
}
