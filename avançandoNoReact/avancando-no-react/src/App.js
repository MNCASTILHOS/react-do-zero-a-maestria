import { useState } from 'react';
import './App.css';
import city from "./assets/city.jpg"
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import ListRender from './components/ListRender';
import { ManageData } from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';
import Fragment from './components/Fragment';


function App() {
  //const name = "Joaquim";
  const [Username] = useState("Maria");

  const cars = [
    { id:1, brand:"Ferrari", km:0, color:"Amarela", newCar:true },
    { id:2, brand:"Kia", km:50000, color:"Branco", newCar:false },
    { id:3, brand:"Renault", km:1000, color:"Amarela", newCar:false }
  ];

    function showMessage() {
      console.log("evento do componente pai")
    };

    const [message, setMessage] = useState("");

    const handleMessage = (msg) => {
      setMessage(msg);
    };

    const users = [
      {id:1, name:"Miriam", age:25, profession:"programmer"},
      {id:2, name:"João", age:30, profession:"teacher"},
      {id:3, name:"Carlos", age:60, profession:"mechanic"},
    ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* inserindo imagem publica */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"></img>
      </div>

      {/* inserindo imagem assets*/}
      <div>
        <img src={city} alt="cidade"></img>
      </div>
      <ManageData/>

      <ListRender/>
      
      <ConditionalRender/>

      {/* props */}
      <ShowUserName name={Username}/>

      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color={"Azul"} newCar={false}/>

      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color={"Vermelha"} newCar={true}/>
      <CarDetails brand="Fiat" km={45000} color={"Preto"} newCar={false}/>

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km}
        newCar={car.newCar}/>
      ))}

      {/* Fragment */}
      <Fragment propFragment="teste" />

      {/* Children */}
      <Container myValue="testing">
        <p>Este é o container</p>
      </Container>

      <Container myValue="testing2">
        <p>Este é o container</p>
      </Container>


      {/* Executar função */}
      <ExecuteFunction MyFunction={showMessage}/>

      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      { /* desafio User */}
      {users.map((user) => (
        (user.age >= 18) && 
        <UserDetails
        key={user.id}
        name={user.name}
        age={user.age}
        profession={user.profession}
        />
      ))}
      

    </div>
  );
}

export default App;
