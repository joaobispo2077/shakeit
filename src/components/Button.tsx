import { useState } from "react"

interface ButtonProps {
  color?: string;
  children?: string;
}

export function Button(props: ButtonProps) {
  const [counter, setCounter] = useState(0);


  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <button 
    onClick={() => incrementCounter} 
    style={{backgroundColor: props.color}}>
      {props.children} {counter}
    </button>
  )
}