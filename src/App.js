import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function App() {
  let count = useSelector(state=>state.count)
  let dispatch = useDispatch();
  let id = useSelector(state=>state.id);
  let password = useSelector(state=>state.password);

  const increase=()=>{
    dispatch({type:"INCREMENT", payload:{num:5}})
  }
  const decrease=()=>{
    dispatch({type:"DECREMENT", payload:{num:5}})
  }
  const login=()=>{
    dispatch({type:"LOGIN",payload:{id:"kmj", password:"123"}})
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
