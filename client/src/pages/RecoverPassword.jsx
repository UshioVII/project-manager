import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { Alert } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";


export const RecoverPassword = () => {


  const [alert, setAlert] = useState({});

  const [password, setPassword] = useState("");

  const [tokenChecked, setTokenChecked] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();

  const handleShowAlert = (msg) => {
    setAlert({
      msg
    });

  };

  useEffect(() => {

    const checkToken = async () => {
      try {

        const { data } = await clientAxios.get(`/auth/reset-password?token=${token}`);
        console.log(data.msg)
        setTokenChecked(true)

      } catch (error) {
        console.error(error)
        handleShowAlert(error.response?.data.msg)
      }
    }

    checkToken()

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      handleShowAlert('El password es requerido')
      return null
    }

    try {
      const { data } = await clientAxios.post(`/auth/reset-password?token=${token}`, {
        password
      });

      Swal.fire({
        icon: 'info',
        title: '¡Constraseña cambiada exitosamente!',
        text: data.msg,
        confirmButtonText: "Iniciá sesión",
        allowOutsideClick: false
      }).then(result => {
        if (result.isConfirmed) {
          setPassword("");
          navigate('/')
        }
      })
    } catch (error) {
      console.error(error)
      handleShowAlert(error.response?.data.msg)
      setPassword("");

    }

  }

  return (
    <>
      <h1 className="text-white font-black text-3xl text-center">
        Restablecé tu contraseña
      </h1>
      {
        alert.msg && <Alert {...alert} />
      }
      {
        tokenChecked ?
          (
            <form
              onSubmit={handleSubmit}
              className="my-10 p-8 bg-white rounded-lg border shadow-lg"
              noValidate
            >
              <div className="my-5">
                <label
                  htmlFor="password"
                  className="text-gray-500 block font-bold "
                >
                  Nueva contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Escribí tu nueva contraseña"
                  className="w-full mt-3 p-3 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-green-700 w-full py-3 text-white rounded  hover:bg-green-800 transition-colors mb-4"
              >
                Restablecer contraseña
              </button>
            </form>
          ) :
          <nav className="md:flex md:justify-between">
            <Link
              to={"/register"}
              className=" text-white block text-center my-3 text-sm  drop-shadow-lg"

            >
              ¿Todavía no estas registrado? ¡Regístrate ahora!
            </Link>
            <Link
              to={"/"}
              className=" text-white block text-center my-3 text-sm  drop-shadow-lg"

            >
              ¿Ya te has registrado? ¡Inicia sesión ahora!
            </Link>
          </nav>
      }

    </>
  );
};