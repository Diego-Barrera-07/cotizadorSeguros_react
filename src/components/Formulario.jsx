import { Marcas, Years, Planes } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "../components/Error";

const Formulario = () => {
  const {
    handleChangeData,
    data,
    setError,
    error,
    cotizarSeguro
  } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");

    cotizarSeguro();
  };

  return (
    <>
      {error && <Error>{error}</Error>}

      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200 rounded-lg"
            onChange={(e) => handleChangeData(e)}
            value={data.marca}
          >
            <option value="">Selecciona la marca</option>
            {Marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año del modelo
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200 rounded-lg"
            onChange={(e) => handleChangeData(e)}
            value={data.year}
          >
            <option value="">Selecciona el año</option>
            {Years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Planes
          </label>
          <select
            name="plan"
            className="w-full p-3 bg-white border border-gray-200 rounded-lg"
            onChange={(e) => handleChangeData(e)}
            value={data.plan}
          >
            <option value="">Selecciona el plan</option>
            {Planes.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-600 text-white hover:bg-indigo-800 cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
