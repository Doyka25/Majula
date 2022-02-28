import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {


  const cartStorage = JSON.parse(sessionStorage.getItem('cart'))

  const [cart, setCart] = useState(!cartStorage ? [] : cartStorage )

  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart))
  },[cart])
  
  
  const handleAdd = (product, quantitySetted) => {
    
    const exist = cart.find( (cartItem) => cartItem.id === product.id )
    
    if(exist) {
      setCart(cart.map( (cartItem) => cartItem.id === product.id ? 
      {...cartItem, quantity: cartItem.quantity + quantitySetted, subTotal: cartItem.subTotal + (cartItem.price * quantitySetted)} : cartItem) )
    } else {
      setCart([...cart, {...product, quantity: quantitySetted, subTotal: product.price * quantitySetted}])
    }
  }
  
  
  const handleAddMore = (product) => {  
    handleAdd(product, 1)     
  }
  

  const handleSub = (product) => {
    
    const exist = cart.find( (cartItem) => cartItem.id === product.id )
    
    if(exist.quantity === 1) {
      handleRemove(product)
    } else {
      setCart(cart.map( (cartItem) => cartItem.id === product.id ? 
      {...cartItem, quantity: cartItem.quantity - 1, subTotal: cartItem.subTotal - cartItem.price} : cartItem) )
    }
    
  }
  
  const handleRemove = (product) => {
    setCart(cart.filter( (cartItem) => cartItem.id !== product.id ))
  }
  
  const handleClear = () => {
    setCart([])
  }
  
  const totalCart = cart.reduce( (price, cartItem) => price + cartItem.subTotal, 0 )

  const totalItems = cart.reduce( (quantity, cartItem) => quantity + cartItem.quantity, 0 )
  
  return(
    <CartContext.Provider 
    value={{ 
      cart,
      handleAddMore, 
      handleAdd, 
      handleSub,
      handleRemove,
      handleClear,
      totalCart,
      totalItems,
      orderId,
      setOrderId
    }}>
      {children}
    </CartContext.Provider>
  ) 
}

export default CartContextProvider

