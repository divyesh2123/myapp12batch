import React, { useState } from 'react'

export default function ShowMoreInfo({helpText}) {

    const [showMore,setShowMore] = useState(false);

    let d = React.useMemo(()=> {

        console.log("this has been called");
        return helpText.slice(0,30).concat('...');

    },[helpText])

    const displayText = ()=> {

        console.log("this has been called");
        return helpText.slice(0,30).concat('...');

    }

  return (
    <div>
        <p onClick={()=>{ setShowMore(!showMore)}}>

        {showMore?helpText : d} {showMore? 'less' : 'more'}

        </p>

    </div>
  )
}
