import { Link } from "react-router-dom";

export const ForgetPassword = () => {

  return (
    <>
      <h1 className="text-white font-black text-3xl text-center">
        Recupera tu cuenta
      </h1>

      <form
        action=""
        className="my-10 p-8 bg-white rounded-lg border shadow-lg"
        noValidate
      >
        <div className="my-5">
          <label htmlFor="email" className="text-gray-500 block font-bold ">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingresá tu email"
            className="w-full mt-3 p-3 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 w-full py-3 text-white rounded  hover:bg-green-800 transition-colors mb-4"
        >
          Recuperar contraseña
        </button>
      </form>
      <nav className="md:flex md:justify-between">
        <Link
          to={"/register"}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg "
        >
          Regístrese para crear una cuenta
        </Link>
        <Link
          to={"/"}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg "
        >
          ¿Estás registrado? Iniciá sesión
        </Link>
      </nav>
    </>
  );
};