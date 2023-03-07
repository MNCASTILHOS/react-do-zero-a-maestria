const Challenge = () => {

    const number = {
        num1: 25,
        num2: 50,
    };

    const handlerSoma = (e) => {
        console.log(e);
        console.log(number.num1 + number.num2)
    };

     return (
        <div>
            <div>
                <h1>{number.num1}</h1>
                <h1>{number.num2}</h1>
            </div>
            <div>
                <button onClick={handlerSoma}>Somar</button>
            </div>
        </div>
    );
}

export default Challenge;