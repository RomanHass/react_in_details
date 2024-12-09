import { memo, useState } from "react"

export default {
  title: 'ReactMemo',
}


const NewMessagesCounter = (props: {count:number}) => {
  return <div>{props.count}</div>
}

type UsersType = {
  users: Array<string>
}

const UsersSecret = (props: UsersType) => {
  console.log('USERS');
  
  return <div>{
    props.users.map((u, i) => <div key={i}>{u}</div>)
  }</div>
}

const Users = memo(UsersSecret)

export const Example1 = () => {
  console.log('EXAMPLE 1');

  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Roman', 'Daria', 'Tatiana', 'Lubov'])

  const addUser = () => {
    setUsers([...users, 'PETE'])
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>add user</button>
    <NewMessagesCounter count={counter} />
    <Users users={users} />
  </>
}