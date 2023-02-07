import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";
import useAuth from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";


export const Login = () => {

  const [alert, setAlert] = useState({});
  const { setAuth } = useAuth();
  const navigate = useNavigate()

  const handleShowAlert = (msg, time = true) => {
    setAlert({
      msg,
    });

    if (time) {
      setTimeout(() => {
        setAlert({});
      }, 3000);
    }
    reset();
  };

  const { formValues, handleInputChange, reset } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null;
    }

    try {

      const { data } = await clientAxios.post('/auth/login', {
        email,
        password
      })

      //console.log(data);

      setAuth(data.user);
      sessionStorage.setItem('token', data.token);

      navigate('/projects')

    } catch (error) {
      console.error(error)
      handleShowAlert(error.response?.data.msg)
    }


  };

  return (
    <>
      <h1 className='text-white font-black text-3xl drop-shadow-lg text-center'>Inicia sesión</h1>

      {alert.msg && <Alert {...alert} />}

      <form
        onSubmit={handleSubmit}
        className='my-10 p-8 bg-white rounded-lg border shadow-lg'
        noValidate >
        <h2 className='text-gray-500 font-black text-center'>Iniciar sesión en | Board Flow</h2>
        <div className="my-5">
          <label htmlFor="email"  className="text-gray-500 block ">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su dirección de correo electrónico"
            className="w-full mt-3 p-3 border rounded"
            autoComplete='off'
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-5">
          <label htmlFor="password" className="text-gray-500 block  ">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            className="w-full mt-3 p-3 border rounded"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 w-full py-3 text-white  rounded  hover:bg-green-800 transition-colors mb-4"
        >
          Iniciar sesión
        </button>
      </form>
      <nav className='md:flex md:justify-around text-center'>
        <Link
          to={'/register'}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg "
        >
          Registrarse
        </Link>
        <Link
          to={'/forget-password'}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg "
        >
          ¿Olvidaste la contraseña?
        </Link>

      </nav>
    </>
  )
}