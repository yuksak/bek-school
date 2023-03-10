import { motion } from 'framer-motion'

import CooperateCard from '../../CooperateCard'
import SectionTitle from '../../SectionTitle'
import { cardContainerAnimation } from '../../../animation'

import partnerImage1 from '../../../public/images/partner-1.png'
import partnerImage2 from '../../../public/images/partner-2.png'
import partnerImage3 from '../../../public/images/partner-3.png'

export const Cooperate = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={cardContainerAnimation}
    >
      <SectionTitle title="Школа сотрудничает" />
      <div className="flex flex-row flex-wrap justify-between gap-6">
        {cooperators.map((cooperator) => (
          <CooperateCard {...cooperator} key={cooperator.id} />
        ))}
      </div>
    </motion.div>
  )
}

const cooperators = [
  {
    id: 'partner1',
    title: 'Center for Advanced Technologies',
    image: partnerImage1,
    description:
      'В современной педагогической классификации учебные пособия – это все материальные средства обучения.',
    path: '/partner/1',
  },
  {
    id: 'partner2',
    title: 'Center for Advanced Technologies',
    image: partnerImage2,
    description:
      'В современной педагогической классификации учебные пособия – это все материальные средства обучения.',
    path: '/partner/2',
  },
  {
    id: 'partner3',
    title: 'Center for Advanced Technologies',
    image: partnerImage3,
    description:
      'В современной педагогической классификации учебные пособия – это все материальные средства обучения.',
    path: '/partner/3',
  },
]
