import { useState } from "react";
import "./styles.css";
function Counter(props){
  const [count,setCount] = useState(10);
  function inc(){
    setCount(count+1)
  }
  const startFrom=props.startFrom ||0 ;
  return (
    <>
    <h1>{count}</h1>
    <button onClick={inc}>Inc</button>
    </>
  );
}
export default function App() {
  return (
    <>
    <h2>All the Counters "change" their "state" "independently" differently</h2>
  <Counter startFrom={100}/>
  <Counter />
  <Counter />
  </>
    );
    //We can create our Own Compo
}
