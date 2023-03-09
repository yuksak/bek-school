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
      } border-dark-deep focus:border-dark-deep box-border flex gap-2 border border-transparent bg-yellow px-9 py-6 text-xl font-semibold leading-[22px] hover:border-yellow hover:bg-transparent`}
    >
      {children && children} {text && text}
    </button>
  )
}

export default Button
