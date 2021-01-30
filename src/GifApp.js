import React , {useState} from 'react';
import AddCategoria from './componentes/AddCatergoria'
import { GifGrid } from './componentes/GifGrid';
  

const GifApp = () => {
  const [categoria, setCategoria] = useState(["Naruto"]);

  return ( 
    <>
    <h1>GifApp</h1>
    <AddCategoria
    setCategoria={setCategoria}
    />
    <hr />
    <ol className="d-flex flex-wrap">
      {
        categoria.map( cater =>
           <GifGrid
           key={cater}
           cater={cater}
            />
           )
      }
    </ol>
    </>
   );
}
 
export default GifApp;

