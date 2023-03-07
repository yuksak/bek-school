import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoLight from '../../public/images/logo.svg'
import logoDark from '../../public/images/logo-dark.svg'
import logoGrey from '../../public/images/logo-grey.svg'

interface ILogo {
  variant: 'light' | 'dark' | 'grey'
  size?: number
}

const Logo = ({ variant, size }: ILogo) => {
  let logoVariant
  let height

  if (variant === 'light') {
    logoVariant = logoLight
    height = size ? size : 51
  }
  if (variant === 'dark') {
    logoVariant = logoDark
    height = size ? size : 59
  }
  if (variant === 'grey') {
    logoVariant = logoGrey
    height = size ? size : 112
  }

  return (
    <Link href="/">
      <Image src={logoVariant} height={height} className={`h-[${height}px]`} alt="Bek Logo" />
    </Link>
  )
}

export default Logo
