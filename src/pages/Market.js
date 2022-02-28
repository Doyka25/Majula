import React from 'react'
import ItemListContainer from '../components/tienda/products/ItemListContainer'
import { Fade } from 'react-awesome-reveal';

const Market= () => { 
  return (  
    <Fade>
      <section className = "main">
        <ItemListContainer />
      </section> 
    </Fade>   
  )
}

export default Market;
