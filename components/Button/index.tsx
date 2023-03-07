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
        text ? 'rounded-xl py-3 px-5' : 'rounded-full p-3'
      } border-dark-deep focus:border-dark-deep  flex gap-2 border border-transparent bg-yellow font-semibold hover:border-yellow hover:bg-transparent`}
    >
      {children && children} {text && text}
    </button>
  )
}

export default Button
