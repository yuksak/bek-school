import { NextPage } from 'next'
import Head from 'next/head'

import { Differences, Education, Gallery, OurMission } from '../../components/Sections'

const AboutUs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Наша миссия - помогать всем и каждому!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto mt-6 mb-24 flex flex-col gap-12 px-6 md:my-24 md:mt-9 md:gap-24 md:px-0">
        <OurMission text="second" image="teacher" />
        <Differences />
        <Education />
        <Gallery />
      </main>
    </div>
  )
}

export default AboutUs
