import React from "react";
import { Link } from "react-router-dom";

const CompraExitosa = ({ buyerInfo, orderId }) => {
  return (
    <section className="buy-msg-container">
      <p className="buy-msg">
        Gracias <b>{buyerInfo.name}</b> por tu compra!
        <br />
        <br />
        Recuerda revisar tu bandeja de entrada <b>{buyerInfo.email1}</b> ahí encontrarás todos los detalles de tu compra
        <br />
        <br />
        Tu número de compra es: <b>{orderId}.</b>
        <br />
        <br />
        <Link to="/">
          <span style={{ color: "#F94877" }}>
            Ir a Inicio
          </span>
        </Link>
      </p>
    </section>
  );
};

export default CompraExitosa;
