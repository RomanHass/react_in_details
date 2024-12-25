import { useEffect, useState } from "react"

type PropsType = {

}

const getDigitString = (num: number) => {
  return num < 10 ? '0' + num : num
}

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return <div>
    <span>{getDigitString(date.getHours())}</span>
    :
    <span>{getDigitString(date.getMinutes())}</span>
    :
    <span>{getDigitString(date.getSeconds())}</span>
  </div>
}