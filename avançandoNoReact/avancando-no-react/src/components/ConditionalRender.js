import {useState} from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [nome, setName] = useState ("Marcio")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        {nome === "João" ? (
            <div>O nome é João</div>
        ) : (
            <div>Nome não encontrado</div>
        )}
        <button onClick={() => setName("João")}></button>
    </div>
  );
};

export default ConditionalRender;