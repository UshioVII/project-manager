import { Link } from "react-router-dom"

export const Login = () => {

  return (
    <>
      <h1 className='text-white font-black text-3xl drop-shadow-lg text-center'>Inicia sesión</h1>

      <form
        action=""
        className='my-10 p-8 bg-white rounded-lg border shadow-lg'
        noValidate >
        <h2 className='text-gray-500 font-black text-center'>Iniciar sesión en | Board Flow</h2>
        <div className="my-5">
          <label htmlFor="email" className="text-gray-500 block font-bold ">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su dirección de correo electrónico"
            className="w-full mt-3 p-3 border rounded"
            autoComplete='off'
          />
        </div>
        <div className="my-5">
          <label htmlFor="password" className="text-gray-500 block font-bold ">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            className="w-full mt-3 p-3 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 w-full py-3 text-white  rounded  hover:bg-green-800 transition-colors mb-4"
        >
          Iniciar sesión
        </button>
      </form>
      <nav className='md:flex md:justify-between'>
        <Link
          to={'/register'}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg "
        >
          Regístrese para crear una cuenta
        </Link>
        <Link
          to={'/forget-password'}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg "
        >
          ¿No puede iniciar sesión?
        </Link>

      </nav>
    </>
  )
}