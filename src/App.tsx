import MenuItems from "./components/MenuItems"
import OrderContets from "./components/OrderContets"
import { menuItems } from "./db/db"
import useOrder from "./hooks/useOrder"
function App() {
 console.log(menuItems)
  const {addItem,order,removeItem} = useOrder()
  return (
    <>
    <header className="bg-teal-400 py-5  ">
    <h1 className=" text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
    </header>
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
    <div className="">
      <h2 className="text-4xl font-black">Menu</h2>
      <div className="space-y-3 mt-10">

      {menuItems.map(item => (
        <MenuItems
        key={item.id}
        item={item}
        addItem={addItem}
        />
      ))}
      </div>
    </div>
    <div className="border boder-dashe border-slate-300 p-5 rounded-lg space-y-10 ">
      <OrderContets
      order={order}
      removeItem={removeItem}/>
    </div>
    </main>
    </>
  )
}

export default App
