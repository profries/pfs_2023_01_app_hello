import { useState } from "react";

export default function FavoriteColor() {
    const [color, setColor] = useState("red");        
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => { 
            setColor("blue");
            console.log(color);
        }}
        >Alterar Cor</button>
      </>
    )
  }
  