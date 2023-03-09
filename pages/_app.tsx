import '../styles/globals.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { navRoutes } from '../components/Header'
import Layout from '../components/Layout'
import { IBreadCrumbs } from '../types'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const [breadcrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>([])

  useEffect(() => {
    const currentPaths = navRoutes.filter((route) => pathname.includes(route.path))
    setBreadCrumbs(currentPaths)
  }, [pathname])

  return (
    <Layout breadCrumbs={breadcrumbs}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
