import { useState } from "react";
import { Link } from "react-router-dom"
import { Alert } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import '../Style.css';

const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

export const Register = () => {

  const [alert, setAlert] = useState({});

  const [sending, setSending] = useState(false);

  const { formValues, handleInputChange, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValues);
    if ([name, email, password, password2].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null
    }

    if (!exRegEmail.test(email)) {
      handleShowAlert("El email tiene un formato inválido");
      return null;
    }

    if (password !== password2) {
      handleShowAlert("Las contraseñas no coinciden");
      return null;
    }

    try {
      setSending(true);
      
      const {data} = await clientAxios.post("/auth/register", {
        name,
        email,
        password,
      });

      setSending(false);

      Swal.fire({
        icon: 'info',
        title: '¡Gracias por registrarte!',
        text: data.msg,
      })

      reset()

    }catch (error){
      console.log(error);
      handleShowAlert(error.response?.data.msg)
      reset()
    }

  }

  const handleShowAlert = (msg) => {
    setAlert({ 
      msg 
    }); 

    setTimeout(() => {
      setAlert({});
    }, 3000);
  };

  return (
    <>
      <h1 className='text-white font-black text-3xl  text-center'>Creá tu cuenta</h1>

      {
        alert.msg && <Alert {...alert} />
      }

      <form
        className='my-10 p-8 bg-white rounded-lg border shadow-lg'
        onSubmit={handleSubmit} noValidate
      >

        <h2 className='text-gray-500 font-black text-center'>Creación de cuenta</h2>
        <p className="my-3">Al crear una cuenta en Board Flow, se entiende que el usuario ha leído y aceptado los <a href="/register" className=" text-indigo-900">términos y condiciones</a> de la página. Además, se recibirá un correo electrónico de verificación para confirmar la cuenta. Por favor, verifique su correo electrónico para utilizar los servicios de Board Flow.</p>
        <div className="my-5">
          <label htmlFor="name" className="text-gray-500 block">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Ingrese su nombre completo"
            className="w-full mt-3 p-3 border rounded"
            value={name}
            name="name"
            onChange={handleInputChange} // No deja escribir en el input  
            autoComplete="off"
          />
        </div>
        <div className="my-5">
          <label htmlFor="email" className="text-gray-500 block ">Correo electrónico</label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su dirección de correo electrónico"
            className="w-full mt-3 p-3 border rounded"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-5">
          <label htmlFor="password" className="text-gray-500 block">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese una contraseña segura"
            className="w-full mt-3 p-3 border rounded"
            value={password}
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-5">
          <label htmlFor="password2" className="text-gray-500 block ">Confirma tu contraseña</label>
          <input
            id="password2"
            type="password"
            placeholder="Repita su contraseña"
            className="w-full mt-3 p-3 border rounded"
            value={password2}
            name="password2"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 w-full py-3 text-white rounded  hover:bg-green-800 transition-colors mb-4"
          disabled={sending}
        >
          Crear cuenta
        </button>
      </form>
      <nav className='md:flex md:justify-around text-center'>
        <Link
          to={'/'}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg transition-colors mb-4"
        >
          Iniciar sesión
        </Link>
        <Link
          to={'/forget-password'}
          className=" text-white block text-center my-3 text-sm drop-shadow-lg transition-colors "
        >
          ¿Olvidaste la contraseña?
        </Link>

      </nav>
    </>
  )

}