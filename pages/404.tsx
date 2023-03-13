import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from '../components/Button'
import errorPageImage from '../public/images/error-page-image.png'

const NotFoundPage: NextPage = () => {
  const router = useRouter()

  return (
    <div className="container mx-auto py-[50px]">
      <div className="flex flex-col items-center px-4  text-center">
        <div className="mb-4 h-full max-h-[281px] w-full max-w-[428px] md:mb-8">
          <Image src={errorPageImage} alt="error page image" />
        </div>
        <h1 className="whitespace-pre-wrap text-3xl font-bold md:text-[42px]">
          Что-то пошло не-так!
        </h1>
        <p className="mb-6 w-full max-w-[558px]">
          Школа «Bek» оказывает образовательные услуги только на русском языке. Основные уроки
          проводятся по учебной программе
        </p>
        <Button text="Вернуться на главную" onClick={() => router.push('/')} />
      </div>
    </div>
  )
}

export default NotFoundPage
