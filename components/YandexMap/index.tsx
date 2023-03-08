import React from 'react'
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps'
import { motion } from 'framer-motion'

const YandexMap = () => {
  const defaultState = {
    center: [41.341176, 69.242969],
    zoom: 17,
    controls: [],
  }

  const variant = {
    visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
    hidden: { opacity: 0 },
  }

  return (
    <YMaps>
      <motion.div
        className="overflow-hidden rounded-2xl"
        variants={variant}
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
