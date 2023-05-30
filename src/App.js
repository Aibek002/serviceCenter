
import './App.css';
import Content from './components/Content/content';
import Header from './components/Header/header';
import Services from './components/Services/services';
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import Info from './components/info/info';
import React from 'react';

function App() {
  let path='home';

  return (

    <BrowserRouter>
    
    <div className="app-wrapper">
      <Header/>
      {/* <Content/> */}

<div className='app-wrapper-content'>
<Routes>
<Route path={path} Component={Content}/>
<Route path={'/services'} Component={Services}/>
<Route path={'/services'} Component={Info}/>

</Routes>
</div>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
