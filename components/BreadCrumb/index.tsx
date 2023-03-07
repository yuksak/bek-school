import Link from 'next/link'
import React, { FC } from 'react'
import { IBreadCrumbs } from '../../types'

interface IBreadCrumbProps {
  breadCrumbs: IBreadCrumbs[]
}

const BreadCrumb: FC<IBreadCrumbProps> = ({ breadCrumbs }) => {
  return (
    <div className="container mx-auto">
      {breadCrumbs.length && (
        <ol className="flex flex-row gap-2 text-grey">
          {breadCrumbs.map(({ path, name }, i) => (
            <>
              <li key={path + name}>
                <Link href={path} className="text-grey">
                  {name}
                </Link>
              </li>
              {i !== breadCrumbs.length - 1 && <span key={path + i}>/</span>}
            </>
          ))}
        </ol>
      )}
    </div>
  )
}

export default BreadCrumb
