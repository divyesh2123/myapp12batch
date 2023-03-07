import React, { useState } from 'react'

export default function FileData() {
    const [file,setfile] = useState(null);

    const fileHandler = (e)=> {

        setfile(e.target.files[0]);

    }

   const  getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            console.log(baseURL);
            resolve(baseURL);
          };
          console.log(fileInfo);
        });
      };
    const HandleSubmit = (e)=> {


        getBase64(file)
      .then(result => {
        localStorage.setItem("file",[result])
       
      })
  




        e.preventDefault();



    }


  return (
    <div>
        <form onSubmit={HandleSubmit}>

            <input type="file"  name="name" onChange={fileHandler}/>
        
            <input type="submit" />
        </form>
        
        
        </div>
  )
}
