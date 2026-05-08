// import React from 'react'
// import {useEffect,useState} from 'react'
// const App = () => {
// const [data , setData]= useState([]);
// const getDate = async()=>{
//     try{
//         const a= await fetch("")
//         const b=await a.json();
//         console.log(b.products);
//         setData(b.products);
//     } catch (error){
//       console.log(error);
//     }
// } 
//     useEffect(()=>{
//     getData();
//     },[]);
//   return (
//     <div>

//     </div>
//   )
// }

// export default App


// import React from "react";
// import {useState} from 'react'
// import Abcd from "./components/Abcd";
// const App=()=> {
//     const[mode,setMode]= useState("white");
//   return (
//     <div  style={{
//         backgroundColor:mode===" white"? "white": "black", height:'70vh', color: mode==="white"? "black":"white"

//     }}>
//         <button onClick={()=>setMode('white')}>Light</button>
//         <button onClick={()=>setMode('black')}>Dark</button>

//         <Abcd/>
//     </div>
//   )
// }

// export default App



// 1. Explain props, state, useState, and useEffect
// Props

// Props are used to pass data from one component to another component.

// Example
 function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Rohit" />;
}

export default App;

// 2. State

// State is used to store and manage data inside a component.

// Example
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}

export default Counter;

// 3. useState

// useState is a React Hook used in functional components to manage state.

// Example

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;



// 4. useEffect

// useEffect is used to perform side effects like API calls, timers, or updating the page title.

// Example
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <h1>useEffect Example</h1>
  );
}

export default App;// import React from 'react'
// import {useEffect,useState} from 'react'
// const App = () => {
// const [data , setData]= useState([]);
// const getDate = async()=>{
//     try{
//         const a= await fetch("")
//         const b=await a.json();
//         console.log(b.products);
//         setData(b.products);
//     } catch (error){
//       console.log(error);
//     }
// } 
//     useEffect(()=>{
//     getData();
//     },[]);
//   return (
//     <div>

//     </div>
//   )
// }

// export default App


// import React from "react";
// import {useState} from 'react'
// import Abcd from "./components/Abcd";
// const App=()=> {
//     const[mode,setMode]= useState("white");
//   return (
//     <div  style={{
//         backgroundColor:mode===" white"? "white": "black", height:'70vh', color: mode==="white"? "black":"white"

//     }}>
//         <button onClick={()=>setMode('white')}>Light</button>
//         <button onClick={()=>setMode('black')}>Dark</button>

//         <Abcd/>
//     </div>
//   )
// }

// export default App



// 1. Explain props, state, useState, and useEffect
// Props

// Props are used to pass data from one component to another component.

// Example
 function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Rohit" />;
}

export default App;

// 2. State

// State is used to store and manage data inside a component.

// Example
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}

export default Counter;

// 3. useState

// useState is a React Hook used in functional components to manage state.

// Example

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;



// 4. useEffect

// useEffect is used to perform side effects like API calls, timers, or updating the page title.

// Example
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <h1>useEffect Example</h1>
  );
}

export default App;