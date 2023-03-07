import SloganBanner from '../../SloganBanner'
import missionImage from '../../../public/images/sec-mission-image.png'

export const OurMission = () => {
  return (
    <SloganBanner
      title="Наша миссия - помогать всем и каждому"
      description="Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки
          проводятся по учебной программе, утверждённой МНО, но в процессе преподавания на уроках
          используются дополнительные материалы с разных источников - как российских, так и
          зарубежных изданий."
      image={missionImage}
    />
  )
}
