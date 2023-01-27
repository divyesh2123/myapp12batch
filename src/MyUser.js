import React, { useState } from 'react'

export default function MyUser() {
    const [obj,setobj] = useState({
        firstName : "",
        lastName : "",
        Address1 : "",
        Address2 : "",
        Password : "",
        ConfirmPassword : "",
        City : "",
        State : "",
        Country : ""

    });

    const [validationError, setvalidationError] = useState({

        firstName : "",
        lastName : "",
        Address1 : "",
        Password : "",
        ConfirmPassword : "",
        City : "",
        State : "",
        Country : ""
    });

    const validateOutput = (name,value)=> {

        let erorrMsg = '';

        switch(name)
        {
            case "firstName":
                if(!value)
                {
                    erorrMsg = "Please Enter First Name"; 
                }
            break;

            case "lastName":
                if(!value)
                {
                    erorrMsg = "Please Enter Last Name"; 
                }
            break;

            case "Address1" :
                if(!value)
                {
                    erorrMsg = "Please Enter Address1"; 
                }

                break;

        }

        return erorrMsg;



    }

    const mySubmit = (e)=> {
        e.preventDefault();
        let ob = {};

      Object.
        keys(validationError).map((e)=> {

            let errorMessage  =
             validateOutput(e,obj[e]);

             ob[e] = errorMessage;
            
        })

        setvalidationError(ob);
        console.log(validationError);

    }
    const inputHandler = (e)=> {
        const {name,value} = e.target;

       let errorMessage  = validateOutput(name,value);

        setvalidationError({...errorMessage,[name] : errorMessage});
       
        
        setobj({...obj,[name] :value})
    }
  return (
    <div>
        <form onSubmit={mySubmit}>

        <input type="text"  name="firstName" onChange={inputHandler} onBlur={inputHandler}/>
     <span style={{"color": "Red"}}> {validationError?.firstName}</span>  
        <input type="text" name="lastName" onChange={inputHandler} />
        {validationError?.lastName}
        <input type="text" name="Address1" onChange={inputHandler}/>
        {validationError?.Address1}
        <input type="text" name="Address2" onChange={inputHandler}/>
        <input type="text" name="Password" onChange={inputHandler}/>
        <input type="text" name="ConfirmPassword" onChange={inputHandler}/>
        <input type="text" name="City" onChange={inputHandler}/>
        <input type="text" name="State" onChange={inputHandler}/>
        <input type="text" name="Country" onChange={inputHandler}/>

        <input type="submit" />
        </form>

    </div>
  )
}
