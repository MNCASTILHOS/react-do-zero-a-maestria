import {useState} from "react";

export const ManageData = () => {
    let someData = 10;
            
    console.log(someData);

    const [number, setNumber] = useState(15);

    console.log(number);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
        </div>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
        <div>
            <p>valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar state</button>
        </div>
    </div>
  )
}
