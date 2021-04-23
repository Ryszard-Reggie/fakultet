import React from 'react';
import logo from '../logo.svg';

interface CounterProps
{
    initialNumber?: number; // ? - znak zapytania tworzy zmienną opcjonalną
    onNumberChange: (someNumber: number) => void;
}

// const Counter:React.FC<CounterProps> = (props) =>
const Counter:React.FC<CounterProps> = ({ initialNumber, onNumberChange }) =>
{
    // const liczba = 69;
    // const [counterNumber, setCounterNumber] = React.useState(props.initialNumber || 420);
    const [counterNumber, setCounterNumber] = React.useState(initialNumber || 420);

    // const obj = { a: 1, b: 2 };
    // const { a, b } = obj;

    const addNumber = () =>
    {
        //setCounterNumber(counterNumber + 1);
        const number = counterNumber + 1;
        setCounterNumber(number);

        // if (onNumberChange) { onNumberChange(number); }
        onNumberChange && onNumberChange(number);   // To jest to samo co wyżej
    }
    
    const decreaseNumber = () =>
    {
        //setCounterNumber(counterNumber - 1);
        const number = counterNumber + 1;
        setCounterNumber(number);

        // if (onNumberChange) { onNumberChange(number); }
        onNumberChange && onNumberChange(number);
    }

    return (
        <div>
            <button onClick={addNumber} >+</button>
            {counterNumber}
            <button onClick={decreaseNumber} >-</button>
        </div>
    );
}

// const Counter = () =>
// {
//     // const liczba = 69;
//     const [liczba, setLiczba] = React.useState(69); // Domyślna wartość: 69

//     const zwiekszLiczbe = () =>
//     {
//         setLiczba(liczba + 1);
//     }
    
//     const zmniejszLiczbe = () =>
//     {
//         setLiczba(liczba - 1);
//     }

//     return (
//         <div>
//             <button onClick={zwiekszLiczbe} >+</button>
//             {liczba}
//             <button onClick={zmniejszLiczbe} >-</button>
//         </div>
//     )
// }

export default Counter;