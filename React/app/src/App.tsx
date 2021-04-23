import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomHeader, {addNumber} from './components/CustomHeader';
import Counter from './components/Counter';

const App = () => {
  const addedNumber = addNumber(1, 2);

  const [changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = (newNumber: number) =>
  {
    console.log(newNumber);
    return newNumber;
  }

  const liczbaMniejszaOdZera = (liczba: number) =>
  {
    if (liczba < 0)
    {
      return (<div>Liczba jest mniejsza od 0</div>)
    }
  }

  return (
    <div className="App">
        <CustomHeader>
          <Counter onNumberChange={handleNumberChange} />
          {
            changedNumber > 0 && (<div> liczba jest większa od 0</div>)
          }
          {
            liczbaMniejszaOdZera(changedNumber)
          }
        </CustomHeader>
    </div>
  );
}

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



export default App;
