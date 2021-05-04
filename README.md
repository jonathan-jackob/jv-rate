# Rate básico para react

#### instalación
___
```
$ npm install jv-rate
```

## Ejemplo de uso
***
```
import React from "react"
import Rate from "jv-rate"
import { IoMdHeartEmpty, IoMdHeartHalf, IoMdHeart } from "react-icons/io"

function App() {
  return (
    <div style={{ color: "white", fontSize: "30px" }}>

      <h2 className="title">jv-rate</h2>
      {/* los iconos heredan el tamaño de letra y el color que se este utilizando */}

      {/* el value default es 0 */}
      <Rate />

      {/* parámetro className */}
      <Rate value={2} className="text-purple" />

      {/* icono personalizado */}
      <Rate value={5}
        emptyIcon={<IoMdHeartEmpty/>}
        halfIcon={<IoMdHeartHalf/>}
        fullIcon={<IoMdHeart/>}
        style={{color: "red"}} />

      {/* estilos en linea */}
      <Rate
        value={8}
        style={{ fontSize: "35px",  color: "green" }}  />

      <Rate
        value={10}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          color:'yellow' }}
      />

    </div>
  )
}

export default App

```

