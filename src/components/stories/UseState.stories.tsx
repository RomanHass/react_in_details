import { useMemo, useState } from "react";

export default {
  title: 'useState demo'
}

const generateData = () => {
  console.log('generateData');
  return 1
}

export const Example = () => {
  console.log('Example');

  // const initValue = useMemo(generateData, [])

  const [counter, setCounter] = useState(generateData)

  const changer = (state: number) => state + 1

  return (
    <div>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </div>
  )
}