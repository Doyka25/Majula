import React from 'react'
import Item from './Item';

const Itemlist = ({products}) => { 

  return (

    <div className = "item-list">
      {
        products.map( product => 
          <Item 
            key = {product.id} 
            product = {product} 
          />
        )
      } 
    </div>

  )
}

export default Itemlist;