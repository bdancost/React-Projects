import { classMerge } from '../utils/classMerge'

type Props = React.ComponentProps<'button'> & {
  isLoading?: boolean
  variant?: 'base' | 'icon' | 'iconSmall'
}

const variants = {
  button: {
    base: 'h-12',
    icon: 'h-12 w-12',
    iconSmall: 'h-8 w-8',
  },
}

export function Button({ isLoading, children, className, type = 'button', variant = 'base', ...rest }: Props) {
  return (
    <button
      type={type}
      className={classMerge([
        ' bg-green-100 text-white font-semibold rounded-lg hover:bg-green-200 disabled:opacity-50 transition-ease-linear flex items-center justify-center cursor-pointer',
        variants.button[variant],
        isLoading && 'cursor-progress',
        className,
      ])}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  )
}
