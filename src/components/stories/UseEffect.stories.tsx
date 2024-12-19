import { useEffect, useState } from "react"

export default {
  title: 'useEffect'
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

  console.log('SimpleExample');

  // useEffect(() => {
  //   debugger
  //   console.log('useEffect');
  //   document.title = counter.toString()
  //   // api.getUsers().then()
  //   // setInterval
  //   // indexDB
  //   // document.getElementById
  //   // document.title = "User"
  // }, [counter])

  useEffect(() => {
    console.log('useEffect works every render');
    document.title = counter.toString()
  })
  useEffect(() => {
    console.log('useEffect works only first render(component mounted)');
    document.title = counter.toString()
  }, [])
  useEffect(() => {
    console.log('useEffect works first render and every counter change');
    document.title = counter.toString()
  }, [counter])

  return <>
    Hello, {counter} {fake}
    <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>counter+</button>
  </>

}