type TipPercentaje = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
  }
  
  const tipOptions = [
    { id: 'tip-10', value: 0.10, label: '10%' },
    { id: 'tip-20', value: 0.20, label: '20%' },
    { id: 'tip-50', value: 0.50, label: '50%' },
  ]
  
  export default function TipPorcentaje({ setTip, tip }: TipPercentaje) {
    return (
      <>
        <h3 className="font-black text-2xl">Propinas:</h3>
        <form>
          {tipOptions.map(option => (
            <div className="flex gap-2" key={option.id}>
              <label htmlFor={option.id}>{option.label}</label>
              <input
                id={option.id}
                type="radio"
                name="tip"
                value={option.value}
                onChange={e => setTip(parseFloat(e.target.value))}
                checked={option.value === tip}
              />
            </div>
          ))}
        </form>
      </>
    )
  }
  