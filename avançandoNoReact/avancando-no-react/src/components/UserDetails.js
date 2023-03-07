import React from 'react'

const UserDetails = ({id, name, age, profession}) => {
  return (
    <div>
        <h1>Aprovados</h1>
        <ul>
            <li>id: {id}</li>
            <li>nome: {name}</li>
            <li>idade: {age}</li>
            <li>profissão: {profession}</li>
        </ul>
    </div>
  )
};

export default UserDetails;
