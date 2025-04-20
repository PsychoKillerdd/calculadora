import { useMemo } from "react"
import { OrderItem } from "../type"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order:OrderItem[]
    tip:number

}
export default function OrderTotals({order,tip}:OrderTotalProps) {
    const subtotal = useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price),0),[order])
    const tipAmount = useMemo(() => subtotal * tip,[tip,order])
    const totalAmount = useMemo(() => subtotal + tipAmount,[tip,order])


  return (
    <>
    <div className='space-y-3'>
        <h2 className='font-black text-2xl'>Totales y propinas:{''} </h2>
        <p>SubTotal a pagar: <span className='font-bold'>{formatCurrency(subtotal) }</span></p>
        <p>Propina: <span className='font-bold'>{formatCurrency(tipAmount)}</span></p>
        <p>Total a pagar: <span className='font-bold'>{formatCurrency(totalAmount)}</span></p>
    </div>
    <button className="w-full bg-black p-3 text-white mt-10 disabled:opacity-10 "
            disabled={totalAmount === 0 }
    >
        Guardar Orden

    </button>
    </>
  )
}
