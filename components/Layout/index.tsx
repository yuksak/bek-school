import { useRouter } from 'next/router'
import React, { FC } from 'react'

import BreadCrumb from '../BreadCrumb'
import Footer from '../Footer'
import { Header } from '../Header'

import { IBreadCrumbs } from '../../types'

interface ILayoutProps {
  children: React.ReactNode
  breadCrumbs: IBreadCrumbs[]
}

const Layout: FC<ILayoutProps> = ({ children, breadCrumbs }) => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col content-center">
      <Header />
      {!isHome && <BreadCrumb breadCrumbs={breadCrumbs} />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
