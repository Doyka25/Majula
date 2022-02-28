import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {
    cart,
    totalCart,
    handleAddMore,
    handleSub,
    handleRemove,
    handleClear,
  } = useContext(CartContext);

  const history = useHistory();

  return (
    <Fade>
      <section className="cart__container">
        <h2>Carrito</h2>
        <table className="cart-table">
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="cart__item">
                <td>
                  <img
                    className="cart-img"
                    src={process.env.PUBLIC_URL + item.img}
                    alt={item.name}
                  />
                </td>

                <td>
                  <h3>{item.name}</h3>
                </td>

                <td>
                  <h3>${item.price}</h3>
                </td>

                <td>
                  <div className="item-quantity">
                    <div>
                      <button
                        className="cart-button"
                        onClick={() => handleAddMore(item)}
                      >
                        +
                      </button>
                    </div>

                    <span style={{ marginRight: 9 }}>{item.quantity}</span>

                    <div>
                      <button
                        className="cart-button"
                        onClick={() => handleSub(item)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </td>

                <td>
                  <h4>Sub-total: S/.{item.subTotal}</h4>
                </td>

                <td>
                  <span onClick={() => handleRemove(item)}>
                    <FontAwesomeIcon
                      className="delete-button"
                      icon={faTrash}
                      size="2x"
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        {totalCart ? (
          <div className="total">
            <div>
              <h1>Total: S/.{totalCart}</h1>
            </div>

            <br />

            <div className="add__cart">
              <button
                className="final-buttons clear-button"
                onClick={() => handleClear()}
              >
                Vaciar carrito
              </button>
              <button
                className="final-buttons checkout-button"
                onClick={() => history.push("/checkout")}
              >
                Terminar Compra
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1>Tu carrito no tiene productos</h1>
            <Link to="/tienda/category/all">
              <h2 style={{ color: "#DD4B39"}}>
                Empieza a agregar productos a tu bolsa!
              </h2>
            </Link>
          </>
        )}
      </section>
    </Fade>
  );
};

export default Cart;
