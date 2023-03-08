import Image from 'next/image'
import { motion } from 'framer-motion'

import Button from '../../Button'
import SectionTitle from '../../SectionTitle'

import gallery1 from '../../../public/images/gallery-pic-1.png'
import gallery2 from '../../../public/images/gallery-pic-2.png'
import gallery3 from '../../../public/images/gallery-pic-3.png'
import gallery4 from '../../../public/images/gallery-pic-4.png'
import gallery5 from '../../../public/images/gallery-pic-5.png'
import gallery6 from '../../../public/images/gallery-pic-6.png'
import { cardAnimation } from '../../../animation'

export const Gallery = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
      <SectionTitle title="Галерея" />
      <div className="flex flex-col items-center gap-10">
        <motion.div
          className="flex flex-row flex-wrap justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.5, delayChildren: 1 }}
        >
          {galleries.map(({ id, photo }) => (
            <motion.div key={id} variants={cardAnimation}>
              <Image
                src={photo}
                alt="gallery photo"
                className="cursor-pointer transition-all duration-150 ease-in hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
        <Button text="Показать больше" />
      </div>
    </motion.div>
  )
}

const galleries = [
  { id: 'gallery1', photo: gallery1 },
  { id: 'gallery2', photo: gallery2 },
  { id: 'gallery3', photo: gallery3 },
  { id: 'gallery4', photo: gallery4 },
  { id: 'gallery5', photo: gallery5 },
  { id: 'gallery6', photo: gallery6 },
]
