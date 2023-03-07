import React from "react";
import Header from "./Header";

const MyHoc = (Component) => ({...props}) => (
    <div>
     

     <Header/>

      <div style={{ position: "absolute", left: "340px" }}>
        <Component {...props}/>

      
       
      </div>
      
      <footer>This is the footer</footer>
    </div>
  );

export default MyHoc;