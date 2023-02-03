import React, { useContext } from 'react'
import LanguageContext from './UserContext/LanguageContext'
import "./index.css"

export default function LoginRe() {

  const {lan} =  useContext(LanguageContext);

    const myOBject = {

            en : {
                firstName : "first Name",
                lastName : "Last Name",
                login : "Login",
                password: "password"

            },

            hi : {
                firstName : "पहला नाम",
                lastName : "उपनाम",
                login : "लॉग इन करें",
                password: "पासवर्ड"
            }

    }



  return (
    <div >
        {myOBject[lan].login}
        <label>
        {myOBject[lan].firstName}
        </label>
        <input type="text" />

        <label>
        {myOBject[lan].password}
        </label>

        <input type="text" />

        <input type="submit" value="login" />

    </div>
  )
}
