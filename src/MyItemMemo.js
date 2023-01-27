import React, { useEffect } from 'react'

 function MyItemMemo(props) {

    console.log(props);
    

  return (
    <div>MyItemMemo</div>
  )
}

export default React.memo(MyItemMemo, (pre,nexr)=> {
    if(pre.items.length == nexr.items.length)
    {
        return true;
    }

    return false;

});
