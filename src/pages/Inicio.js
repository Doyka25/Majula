import React from 'react'
import ContainerH from '../components/home/ContainerH'
import { Fade } from 'react-awesome-reveal';

const Inicio = () => {
  return (
    <Fade>
      <main style ={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ContainerH />
      </main>
    </Fade>
  )
}

export default Inicio
