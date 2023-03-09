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
        <Map defaultState={defaultState} width={1140} height={445}>
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
