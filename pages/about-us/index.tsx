import { NextPage } from 'next'
import { Gallery } from '../../components/Sections'

const AboutUs: NextPage = () => {
  return (
    <div className="mx-auto my-24 flex max-w-[1142px] flex-col gap-24">
      <Gallery />
    </div>
  )
}

export default AboutUs
