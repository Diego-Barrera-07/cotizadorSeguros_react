import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";
import Resultado from "../components/Resultado";
import Spinner from "./Spinner";

const AppSeguro = () => {
  const { cargando } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-bold">
          Cotiza el seguro de tu auto
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto rounded-lg p-10">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
};

export default AppSeguro;
