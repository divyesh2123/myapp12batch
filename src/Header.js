import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import LanguageContext from './UserContext/LanguageContext'

export default function Header() {

 const {lan,setLan} = useContext(LanguageContext);
  let a =5;
  let n=6;
 
  return (
    <div>
            <select onChange={(e)=> {setLan(e.target.value)}}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>

            </select>

            <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href ="/regi">Registration</a>
          </li>
          <li>
            <Link to="/logi">Login</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}
