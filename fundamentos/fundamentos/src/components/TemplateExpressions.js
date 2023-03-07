const TemplateExpressions = () => {
    const name = "Miriam";
    const data = {
        age: 25,
        job: "programmer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>Você tem: {data.age} anos</p>
        </div>
    );
};

export default TemplateExpressions;