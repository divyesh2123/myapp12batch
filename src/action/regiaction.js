import axios from "axios";
//import {  Registration_Failed, Registration_Start, Registration_SUCCESS, } from "../constans";

export  const postRegistrati = (data) => {
    debugger;
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: 'START' });
      // Return promise with success and failure actions
      return axios.post('http://localhost:4000/accounts/register',data).then(  
        user => dispatch({ type: 'SUC', payload: user }),
        err => dispatch({ type: 'FAIL', payload :  err })
      );
    };
  };