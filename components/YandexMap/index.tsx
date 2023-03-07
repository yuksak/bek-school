import React from 'react'
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps'

const YandexMap = () => {
  const defaultState = {
    center: [41.341176, 69.242969],
    zoom: 17,
    controls: [],
  }

  return (
    <YMaps>
      <div className="overflow-hidden rounded-2xl">
        <Map defaultState={defaultState} width={1140} height={445}>
          <ZoomControl options={{ adjustMapMargin: true }} />
          <Placemark
            geometry={[41.341176, 69.242969]}
            options={{
              preset: 'islands#redCircleDotIcon',
            }}
          />
        </Map>
      </div>
    </YMaps>
  )
}

export default YandexMap
