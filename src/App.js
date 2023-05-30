
import './App.css';
import Content from './components/Content/content';
import Header from './components/Header/header';
import Services from './components/Services/services';
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import Info from './components/info/info';
import React from 'react';

function App() {
  let path1='/';
  let path2='/services';
  let path3='/info';

  return (

    <BrowserRouter>
    
    <div className="app-wrapper">
      <Header/>
      {/* <Content/> */}

<div className='app-wrapper-content'>
<Routes>
<Route path={path1} Component={Content}/>
<Route path={path2} Component={Services}/>
<Route path={path3} Component={Info}/>

</Routes>
</div>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
