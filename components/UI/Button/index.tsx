import React from 'react'

interface IButton {
  text?: string
  onClick?: () => void
  children?: React.ReactNode
}

export const Button = ({ onClick, text, children }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${
        text ? 'rounded-xl py-3 px-5' : 'rounded-full p-3'
      } flex gap-2  border border-dark-deep border-transparent bg-yellow font-semibold hover:border-yellow hover:bg-transparent focus:border-dark-deep`}
    >
      {children && children} {text && text}
    </button>
  )
}
