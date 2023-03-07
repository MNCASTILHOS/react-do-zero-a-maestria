const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log ("ativou o evento!");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>tambem posso renderizar isso!</h1>
        }
    };
    
  return (
    <div>
        <div>
            <button onclick={handleMyEvent}>Clique aqui</button>
        </div>
        <div>
            <button onclick={() => console.log("clicou")}>
            Clique aqui tambem
            </button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events;