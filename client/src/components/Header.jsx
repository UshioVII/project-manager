import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <div className="px-4 py-5 hr ">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h3 className="text-4xl text-white md:w-1/4">Projects Manager</h3>
        <input type="text" placeholder="Buscar" className="rounded-lg w:3/3 md:w-1/3 lg:w-1/3 p-2 hr-i" />
        <div className="flex justify-between items-center gap-4">
            <Link
              to='/projects'
            className="font-bold text-white underline decoration-indigo-500 hover:text-indigo-500 "
            >
              Proyectos
            </Link>
          <button
            type="button"
            /* onClick={closeSession} */
            className="text-white text-sm bg-neutral-900 hover:bg-neutral-700 p-2 rounded font-bold"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};