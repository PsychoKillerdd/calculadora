import type { MenuItems } from "../type"
type menuItemsProps = {
  item:MenuItems
  addItem: (item: MenuItems) => void
}

export default function MenuItems({item,addItem}:menuItemsProps) {
  return (
    <button className="border-2 border-teal-700 w-full p-3 flex justify-between hover:bg-teal-200"
    onClick={() => addItem(item)}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    
    </button>

  )
}
