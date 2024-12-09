import { memo, useMemo, useState } from "react"

export default {
  title: 'useMemo'
}

export const DifficultCounting = () => {
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while(fake < 10000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a])

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  return <>
    <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
    <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
    <hr />
    <div>
      Refult for a: {resultA}
    </div>
    <div>
      Refult for b: {resultB}
    </div>
  </>
}

const NewMessagesCounter = (props: {count:number}) => {
  return <div>{props.count}</div>
}

type UsersType = {
  users: Array<string>
}

const UsersSecret = (props: UsersType) => {
  debugger
  console.log('UsersSecret');
  
  return <div>{
    props.users.map((u, i) => <div key={i}>{u}</div>)
  }</div>
}

const Users = memo(UsersSecret)

export const HelpToReactMemo = () => {
  console.log('HelpToReactMemo');

  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Roman', 'Daria', 'Tatiana', 'Lubov'])

  const newArray = useMemo(() => {
    return users.filter(u => u.toLowerCase().indexOf('a') > -1)
  }, [users])

  const addUser = () => {
    setUsers([...users, 'Aleh'])
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>add user</button>
    {counter}
    <Users users={newArray} />
  </>
}