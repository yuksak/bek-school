import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps'
import { motion } from 'framer-motion'
import { yandexVariant } from '../../animation'

const YandexMap = () => {
  const defaultState = {
    center: [41.341176, 69.242969],
    zoom: 17,
    controls: [],
  }

  return (
    <YMaps>
      <motion.div
        className="overflow-hidden rounded-2xl"
        variants={yandexVariant}
        initial="hidden"
        whileInView="visible"
      >
        <Map defaultState={defaultState} className="h-[296px] w-full max-w-[1140px] md:h-[445px]">
          <ZoomControl options={{ adjustMapMargin: true }} />
          <Placemark
            geometry={[41.341176, 69.242969]}
            options={{
              preset: 'islands#redCircleDotIcon',
            }}
          />
        </Map>
      </motion.div>
    </YMaps>
  )
}

export default YandexMap
