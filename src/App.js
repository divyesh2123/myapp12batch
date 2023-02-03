import { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import LoginRe from "./LoginRe";
import LanguageContext from "./UserContext/LanguageContext";


function App() {

 const [lan,setLan] = useState('en')
  return (
    <div className="App">
      <LanguageContext.Provider value={{lan,setLan}}>
      <Header/>
      <LoginRe/>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
