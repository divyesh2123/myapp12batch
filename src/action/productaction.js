import axios from "axios";

export const Failed = (payload) => ({
  type:'FAI',
  payload
})

export const SUC = (payload) => ({
  type: 'SUC',
  payload
})



export  const ProducAction = () => {
    debugger;
    return (dispatch) => {     //nameless functions
      // Initial action dispatchedse

      setTimeout(()=> {

      },5000)


        dispatch({ type: 'REQUESTSTART' });
      // Return promise with success and failure actions
      return axios.get('https://fakestoreapi.com/products').then(  
        d => dispatch(SUC(d.data)),
        err => dispatch(Failed(err))
      );
    };
  };