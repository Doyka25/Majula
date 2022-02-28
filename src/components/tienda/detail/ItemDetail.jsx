import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import {useHistory} from "react-router-dom"
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {

  const history = useHistory()
  const [buy, setBuy] = useState(false)

  const goToCart = () => {
    history.push('/cart')
  }
 
  let cuota = product.price / 12;
  let cuotasEntero = cuota.toFixed(2)

  return (

    <Fade>     
      <div 
        className = "item-img" 
        onClick= { () => console.log(product) }
        style = {{
          backgroundImage: `url(${process.env.PUBLIC_URL + product.img})`
        }}>
      </div>

      <div className="detail-info">
          
        <div className="price-name">
          <h2>{product.name}</h2>
          <div className="item-price">
            <h3>${product.price}</h3>
            <span>12 cuotas sin intereses de S/.{cuotasEntero}!</span>
          </div>
        </div>

        <div className="item-desc">
          <p>{product.desc}.</p>
          <br />
          <span>{product.comp}</span>
        </div>

        <hr />
        
        { !buy &&
          <div className="item-talles">
            <h3>Selecciona una opción</h3>
            <br />
            <select className="select" name="talle" required>
              <option value="s">S/M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="U">Estándar</option>
            </select>
          </div>
        }

       <div style = {{display: "flex", width: 1}}>
          {
            !buy ?  
            <ItemCount setBuy = {setBuy} product = {product} />
            :
            <div className="add__cart">
                <button onClick={goToCart} className="add__cart--button continue-button">Continuar con la compra</button>       
              </div> 
          }

          <div style = {{position: "relative"}}>
            <button className = "return-button" onClick={history.goBack}>Volver</button>
          </div>
        </div>   

      </div>    
    </Fade>    
    
  )

}

export default ItemDetail
