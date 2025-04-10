import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
// import { FirstAppTwo } from './FirstAppTwo';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';


const person = {
    first_name:'Lenin',
    last_name:'Ibarra',
    cc:'1307112002',
    age: 23
}

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
        {/* <FirstApp title='Este es mi titulo' person={person} taxes={52000}/> */}
        {/* <FirstAppTwo title= "Este es mi titulo" subTitle="Subtitlo enviado desde las props"/> */}
    </React.StrictMode>
);


