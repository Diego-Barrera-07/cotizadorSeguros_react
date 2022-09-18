import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

// De esta manera este proceso no tiene que ser tan extenso y se almacena 
// en un hook custom que puedes utilizar siempre

const useCotizador =  () => {
    return useContext(CotizadorContext)
}

export default useCotizador