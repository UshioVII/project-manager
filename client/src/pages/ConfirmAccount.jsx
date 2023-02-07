import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Alert } from '../components/Alert';
import { clientAxios } from '../config/clientAxios';

export const ConfirmAccount = () => {

  const { token } = useParams();

  const navigate = useNavigate();

  const [checking, setChecking] = useState(true);

  const [alert, setAlert] = useState({});

  const handleShowAlert = (msg) => {
    setAlert({
      msg
    });

  };

  useEffect(() => {

    const confirmAccount = async () => {
      try {

        const { data } = await clientAxios.get(`/auth/checked?token=${token}`);
        setChecking(false);
        Swal.fire({
          icon: 'info',
          title: '¡Tu cuenta confirmada exitosamente!',
          text: data.msg,
          confirmButtonText: "Iniciá sesión",
          allowOutsideClick: false
        }).then(result => {
          if (result.isConfirmed) {
            navigate('/')
          }
        })
      } catch (error) {
        handleShowAlert(error.response?.data.msg)
      }
    }

    checking && confirmAccount();

  }, []);

  /* useEffect(() => {
    console.log(alert)
  }, [alert]); */
  


  return (
    <>
      <h1 className="text-white font-black text-3xl text-center">
        Confirma tu cuenta
      </h1>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded bg-white'>

        {
          alert.msg && (
            <>
              <Alert {...alert} />

            </>
          )

        }

      </div>
      <nav className="md:flex md:justify-around text-center">
        <Link
          to={"/register"}
          className="text-white block text-center my-3 text-sm drop-shadow-lg"

        >
          Registrarse
        </Link>
        <Link
          to={"/"}
          className="text-white block text-center my-3 text-sm drop-shadow-lg"

        >
          Iniciar sesión
        </Link>
      </nav>

    </>
  )
}