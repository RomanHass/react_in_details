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

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

  console.log('SetTimeoutExample');

  useEffect(() => {

    setInterval(() => {
      setCounter(state => state + 1)
    }, 1000)

  }, []) 

  return <>
    Hello, counter: {counter} - fake: {fake}
    {/* <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>counter+</button> */}
  </>
}


export const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)

  }, [])

  const hours = currentDate.getHours().toString().padStart(2, '0')
  const minutes = currentDate.getMinutes().toString().padStart(2, '0')
  const seconds = currentDate.getSeconds().toString().padStart(2, '0')

  return (
    <time dateTime={`${hours}:${minutes}:${seconds}`}>
      {hours}:{minutes}:{seconds}
    </time>
  )

}