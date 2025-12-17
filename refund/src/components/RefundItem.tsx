export type RefundItemProps = {
  id: string
  name: string
  category: string
  amount: string
  categoryImg: string
}

type Props = React.ComponentProps<'a'> & {
  data: RefundItemProps
}

export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      className="flex items-center gap-3 p-2 bg-gray-500 rounded-md hover:bg-green-100/5 transition ease-linear cursor-pointer"
      {...rest}
    >
      <img src={data.categoryImg} alt="Ícone da categoria" className="w-8 h-8" />

      <div className="flex flex-col flex-1">
        <strong className="text-gray-100 flex-1 text-sm">{data.name}</strong>
        <span className="text-gray-200 text-xs">{data.category}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {data.amount}
      </span>
    </a>
  )
}
