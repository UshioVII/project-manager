import { Link } from "react-router-dom"
import '../Style.css';

export const Register = () => {

  return (

    <>
      <h1 className='text-white font-black text-3xl  text-center'>Creá tu cuenta</h1>

      <form
        action=""
        className='my-10 p-8 bg-white rounded-lg border shadow-lg'
      >

        <h2 className='text-gray-500 font-black text-center'>Creación de cuenta</h2>
        <p className="my-3">Al crear una cuenta en Board Flow, se entiende que el usuario ha leído y aceptado los <a href="/register" className=" text-indigo-900">términos y condiciones</a> de la página. Además, se recibirá un correo electrónico de verificación para confirmar la cuenta. Por favor, verifique su correo electrónico para utilizar los servicios de Board Flow.</p>
        <div className="my-5">
          <label htmlFor="name" className="text-gray-500 block font-bold">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Ingrese su nombre completo"
            className="w-full mt-3 p-3 border rounded"
          />
        </div>
        <div className="my-5">
          <label htmlFor="email" className="text-gray-500 block font-bold">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su dirección de correo electrónico"
            className="w-full mt-3 p-3 border rounded"
          />
        </div>
        <div className="my-5">
          <label htmlFor="password" className="text-gray-500 block font-bold">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese una contraseña segura"
            className="w-full mt-3 p-3 border rounded"
          />
        </div>
        <div className="my-5">
          <label htmlFor="password2" className="text-gray-500 block font-bold">Confirma tu contraseña</label>
          <input
            id="password2"
            type="password"
            placeholder="Repita su contraseña"
            className="w-full mt-3 p-3 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 w-full py-3 text-white rounded  hover:bg-green-800 transition-colors mb-4"
        >
          Crear cuenta
        </button>
      </form>
      <nav className='md:flex md:justify-between'>
        <Link
          to={'/'}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg"
        >
          ¿Estás registrado? Iniciá sesión
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