import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <aside className='md:w-80 px-5 py-10 '>
        <p
        className='text-xl text-white font-bold'
        >
            Bienvenido:{/*  auth.name} */}
        </p>
        <Link
            to="create-project"
        className=' bg-slate-500 w-full p-3 text-white font-bold rounded-md hover:bg-sky-600  block mt-5 text-center'
        >
            Nuevo proyecto
        </Link>
    </aside>
  )
}
