import MenuItems from "./components/MenuItems"
import { menuItems } from "./db/db"
import useOrder from "./hooks/useOrder"
function App() {
 console.log(menuItems)
  const {addItem} = useOrder()
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
    <div className="">
      <h2>Consumo</h2>
    </div>
    </main>
    </>
  )
}

export default App
