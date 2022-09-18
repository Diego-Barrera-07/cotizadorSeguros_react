import { useState, createContext } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
  const [data, setData] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    console.log('Estoy funcionando')
    // Base
    let resultado = 2000;
    // Diferencia de años
    const diferencia = obtenerDiferenciaYear(data.year);
    resultado -= (2 * diferencia * resultado) / 100;
    //  Calcular marca
    resultado *= calcularMarca(data.marca);
    // Calcular plan
    resultado *= calcularPlan(data.plan);
    // Formatear dinero
    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 1000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
