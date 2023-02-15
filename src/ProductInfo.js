import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { ProducAction } from './action/productaction';

export default function ProductInfo() {

    const product = useSelector(y=>y.product);

    const mydis= useDispatch();


    console.log(product);


    useEffect(()=> {

        mydis({type:'REQUESTSTART'})

    },[])

  return (
    <div>
    { product?.isloadding? (<div >loadding</div>) : "" }  

{

product.items.map((element)=> {

    return(<div>{element.title}</div>)

})

}


    </div>
  )
}
