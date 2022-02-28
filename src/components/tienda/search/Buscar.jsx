import React, { useState } from "react";
import { useHistory } from "react-router";

const Buscar = ({ closeAll }) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleInput = ({ target }) => {
    setInput(target.value);
   
  };

  const filtro = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    closeAll();
    setInput("");
    history.push(`/search?q=${input}`);
    
  };

  return (
    <form className="Buscar" onSubmit={filtro}>
      <input
        onChange={handleInput}
        type="text"
        placeholder=" Buscar..."
        value={input}
      />
    </form>
  );
};

export default Buscar;
