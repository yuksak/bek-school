interface IButton {
  text?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Button = ({ onClick, text, children }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${
        text ? 'rounded-xl' : 'rounded-full p-3'
      } border-dark-deep focus:border-dark-deep box-border flex gap-2 whitespace-nowrap border border-transparent bg-yellow py-3 px-4 text-lg font-semibold leading-[22px] hover:border-yellow hover:bg-transparent md:px-9 md:py-6 md:text-xl`}
    >
      {children && children} {text && text}
    </button>
  )
}

export default Button
