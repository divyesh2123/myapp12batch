import { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import LoginRe from "./LoginRe";
import LanguageContext from "./UserContext/LanguageContext";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import NoPage from "./NoPage";
import MyTest from "./MyTest";
import CounterNew from "./CounterNew";
import PostList from "./PostList";

function App() {

 const [lan,setLan] = useState('en')
  return (
    <div className="App">

      <MyTest/>
      <PostList/>
      <CounterNew/>
      <LanguageContext.Provider value={{lan,setLan}}>
      <Header/>

      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="regi" element={<Registration />} />
          <Route path="logi" element={<LoginRe />} />
          <Route path="*" element={<NoPage />} />
       
      </Routes>
      
        
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
