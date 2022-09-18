import { useCallback, useMemo, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { Marcas, Planes } from "../constants/index";

const Resultado = () => {
  const { resultado, data } = useCotizador();
  const { marca, year, plan } = data;
  const yearRef = useRef(year)

  // Usando useCallback
  const [nombreMarca] = useCallback(Marcas.filter((m) => m.id === Number(marca)), [resultado])
  // Usando useMemo
  const [nombrePlanes] = useMemo(() => (Planes.filter((p) => p.id === Number(plan))), [resultado])

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span>Marca: </span>
        {nombreMarca.name}
      </p>
      <p className="my-2">
        <span>Plan: </span>
        {nombrePlanes.name}
      </p>
      <p className="my-2">
        <span>Año: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total cotización:</span> {resultado}
      </p>
    </div>
  );
};

export default Resultado;
