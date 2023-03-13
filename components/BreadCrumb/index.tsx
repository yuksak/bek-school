import Link from 'next/link'
import { FC, Fragment } from 'react'
import { motion } from 'framer-motion'

import { IBreadCrumbs } from '../../types'

interface IBreadCrumbProps {
  breadCrumbs: IBreadCrumbs[]
}

const BreadCrumb: FC<IBreadCrumbProps> = ({ breadCrumbs }) => {
  return (
    <motion.div
      className="container mx-auto px-6 md:px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {breadCrumbs.length && (
        <ol className="flex flex-row gap-2 text-grey">
          {breadCrumbs.map(({ path, name, id }, i) => (
            <Fragment key={id}>
              <li key={id + i}>
                <Link href={path} className="text-grey">
                  {name}
                </Link>
              </li>
              {i !== breadCrumbs.length - 1 && <span>/</span>}
            </Fragment>
          ))}
        </ol>
      )}
    </motion.div>
  )
}

export default BreadCrumb
