import { useRouter } from 'next/router'
import { FC } from 'react'

import BreadCrumb from '../BreadCrumb'
import Footer from '../Footer'
import { Header, navRoutes } from '../Header'

import { IBreadCrumbs } from '../../types'

interface ILayoutProps {
  children: React.ReactNode
  breadCrumbs: IBreadCrumbs[]
}

const Layout: FC<ILayoutProps> = ({ children, breadCrumbs }) => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  const isErrorPage = navRoutes.filter((route) => pathname.includes(route.path))

  return (
    <div className="flex min-h-screen flex-col content-center">
      <Header />
      {!isHome && !isErrorPage && <BreadCrumb breadCrumbs={breadCrumbs} />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
