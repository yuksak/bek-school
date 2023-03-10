import { NextPage } from 'next'
import Head from 'next/head'

import { Gallery, Partner } from '../../components/Sections'

const Partners: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Together we can do more.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-9 mb-24 flex flex-col gap-12 px-6 md:my-24 md:gap-24 md:px-0">
        <Partner />
        <Gallery />
      </main>
    </div>
  )
}

export default Partners
