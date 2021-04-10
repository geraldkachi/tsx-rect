import React from "react";
// import logo from './logo.svg';
import "./App.css";
import RickMorty from "./components/rickmorty/RickMorty";
import TodoApp from "./components/todos/todos";

function App() {

  //  const [count, dispatch] = React.useReducer(reducer, initialState, init)
  //  const [value, setValue] = React.useReducer(reducer, 0)

  // const initialState = {

  // }
  
  //  const reducer = (state = initialState, action) => {
  //   switch (action) {
      // if (condition) {
        
      // }
    // case (action:'ADD'):
    //   return { .
    //     ..count, 
    //     ...payload
    //    }
  
    // default:
    //   return state
    // }
  // }
  
  return (
    <div className="App">
      <RickMorty />
      <TodoApp />
    </div>
  );
}
// ajidagan olorunfumi street

// for scss. suda npm i -g sass
// sass --watch scss/style.scss css/style.css

export default App;

//  <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.tsx</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>


// GraphQl is a query language for Apis  and a runtime for fulfilling those queries with your existing data.
// GraphQl provides a complete and understandable descriptuion of the  data in your Api. give clients the power tp ask exactly  what they  need and nothing more,
//  makes it easier to evolve APIs over time, and enables powerful develop tool.
