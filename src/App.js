import { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import LoginRe from "./LoginRe";
import LanguageContext from "./UserContext/LanguageContext";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import React  from 'react'
import Registration from "./Registration";
import NoPage from "./NoPage";
import MyTest from "./MyTest";
import CounterNew from "./CounterNew";
import PostList from "./PostList";
import {ErrorBoundary} from 'react-error-boundary'
import BuggyCounter from "./BuggyCounter ";
import { ErrorFallback } from "./ErrorFallback";
import MyHoc from "./MyHoc";

// const HomeComponent = React.lazy(() => import('./Home'));

let MyHome = MyHoc(Home)

function App() {

 const [lan,setLan] = useState('en')
  return (
    <div className="App">

      {/* <MyTest/>
      <PostList/>
      <CounterNew/>
     
      <Header/> */}



    
     <Routes>
      
          <Route path="/" element={< MyHome/>} />
          <Route path="regi" element={<Registration />} />
          <Route path="logi" element={<LoginRe />} />
          <Route path="*" element={<NoPage />} />
       
      </Routes>
      
     
      
    </div>
  );
}

export default App;
