import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css';

function App() {
  document.title='Kraig-Facebook'
  return (
    <div className="app">
      
      <Header/> 
<div className='app__body'>
<Sidebar/> 
   </div> 

    </div> //end app
  );
}

export default App;
