import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUser] = useState ([
        {id: 1, name: "Miriam", age: 25},
        {id: 2, name: "Pedro", age: 30},
        {id: 3, name: "Joana", age: 40},
    ]);

    const DeleteRandom = () => {
        const RandomNumber = Math.floor(Math.random() * 4);

        setUser((prevUsers) => {
            return prevUsers.filter((user) => RandomNumber !== user.id);
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={DeleteRandom}>Delete Random user</button>
    </div>
  );
};

export default ListRender;
