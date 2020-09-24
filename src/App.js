import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './App.css';
 import Login from './Login'
 import {useStateValue} from './StateProvider'

function App() {
  document.title='Kraig-Facebook';

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? ( <Login/> ) : (
      <>
         <Header/> 
   <div className='app__body'>
   <Sidebar/> 
      
   <Feed/>
   </div> 
   </>)
      
      }
   
    </div> //end app
  );
}

export default App;
