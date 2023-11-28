"use client"
import { signOut } from "next-auth/react";

function InicioPage() {

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center flex-col">
      <header>
        <h1 className="text-5xl text-center mb-10 font-extrabold">
          Arte Visual
        </h1>
        <p className="text-center">La mejor calidad en monturas con modelos exclusivos y resinas de alta calidad.</p>
      </header>
      <button 
      className="bg-teal-600 text-white py-3 w-[11rem] font-semibold rounded-lg shadow-md hover:bg-teal-700 m-5 text-xl"
        onClick={() => {signOut()}}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default InicioPage;