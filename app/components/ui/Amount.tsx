import { formatCurrency } from "@/src/utils"

type AmountProp= {
    label:string,
    amount:number
}


export default function Amount({label , amount}:AmountProp) {
  return (
    <p className="text-2xl font-bold">
        {label}: {''}
        <span className="text-amber-500">{formatCurrency(amount)}</span>
    </p>
  )
}
