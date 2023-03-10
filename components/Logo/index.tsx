import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoLight from '../../public/images/logo.svg'
import logoDark from '../../public/images/logo-dark.svg'
import logoGrey from '../../public/images/logo-grey.svg'

interface ILogo {
  variant: 'light' | 'dark' | 'grey'
  className: string
}

const Logo = ({ variant, className }: ILogo) => {
  let logoVariant

  if (variant === 'light') {
    logoVariant = logoLight
  }
  if (variant === 'dark') {
    logoVariant = logoDark
  }
  if (variant === 'grey') {
    logoVariant = logoGrey
  }

  return (
    <Link href="/">
      <Image src={logoVariant} height={1000} width={1000} className={className} alt="Bek Logo" />
    </Link>
  )
}

export default Logo
