import React from 'react';
import logo from './logo.svg';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Movie from './views/movie/Movie';
import Home from './views/home/Home';
import Page404 from './views/Page404/Page404';
import TodoPanel from './views/todoPanel/TodoPanel';
import store from './store';      // Plik 'index.ts' jest plikiem domyślnym

import './App.css';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movie/:id" component={Movie}/>
            <Route path="/todos" component={TodoPanel}/>
            <Route path="*" component={Page404} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import CustomHeader, {addNumber} from './components/CustomHeader';
// import Counter from './components/Counter';

// const App = () => {
//   const addedNumber = addNumber(1, 2);

//   const [changedNumber, setChangedNumber] = React.useState(0);

//   const handleNumberChange = (newNumber: number) =>
//   {
//     console.log(newNumber);
//     return newNumber;
//   }

//   const liczbaMniejszaOdZera = (liczba: number) =>
//   {
//     if (liczba < 0)
//     {
//       return (<div>Liczba jest mniejsza od 0</div>)
//     }
//   }

//   return (
//     <div className="App">
//         <CustomHeader>
//           <Counter onNumberChange={handleNumberChange} />
//           {
//             changedNumber > 0 && (<div> liczba jest większa od 0</div>)
//           }
//           {
//             liczbaMniejszaOdZera(changedNumber)
//           }
//         </CustomHeader>
//     </div>
//   );
// }

// Funckja strzałkowa

// const App = () => {
//   const abc = 'abc';
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// Dobre w dumy(?) komponętach:

// const App = () => (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

// );
