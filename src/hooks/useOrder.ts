import { useState } from "react"
import type { MenuItems, OrderItem } from "../type"
export default function useOrder(){

    const [order,setOrder] = useState<OrderItem[]>([])
    
    
    const addItem = (item: MenuItems) => {
        console.log(item)
    }

    return{
        addItem

    }
}