type Props = React.ComponentProps<'button'> & {
  isLoading?: boolean
}

export function Button({ isLoading, children, type = 'button', ...rest }: Props) {
  return (
    <button
      type={type}
      className="w-full h-12 bg-green-100 text-white font-semibold rounded-lg hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition-ease-linear flex items-center justify-center"
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  )
}
