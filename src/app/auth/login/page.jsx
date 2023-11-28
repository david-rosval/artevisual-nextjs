"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    //console.log(data);
    const res = await signIn("credentials", {
      dni: data.dni,
      clave: data.clave,
      redirect: false,
    });
    //console.log(res);

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/inicio");
    }
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form
        action=""
        className="w-[40rem] p-10 bg-slate-200 shadow-md rounded-lg"
        onSubmit={onSubmit}
      >
        <h1 className="text-5xl font-extrabold mb-10 text-center">
          Inicio de Sesión
        </h1>

        {error && (
          <p className="text-white bg-red-600 w-full py-5 uppercase font-bold text-lg text-center mb-5 rounded-lg">
            {error}
          </p>
        )}

        <label htmlFor="dni" className="font-bold text-gray-700">
          DNI
        </label>
        <input
          type="text"
          {...register("dni", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
          })}
          className="p-3 rounded-md block mb-2 bg-white w-full border-2"
          placeholder="Ej. 12345678"
        />
        {errors.dni && (
          <span className="text-red-500">{errors.dni.message}</span>
        )}

        <label htmlFor="clave" className="font-bold text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          {...register("clave", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
          })}
          className="p-3 rounded-md block mb-2 bg-white w-full border-2"
          placeholder="********"
        />
        {errors.clave && (
          <span className="text-red-500">{errors.clave.message}</span>
        )}

        <button className="w-full bg-teal-600 text-white text-lg font-bold p-4 rounded-md hover:bg-teal-700 mt-10">
          Iniciar Sesión
        </button>
        <a
          className="mt-2 block underline clickable text-right cursor-pointer text-teal-600"
          onClick={() => {
            router.push("/auth/register");
          }}
        >
          No tengo un cuenta
        </a>
      </form>
    </div>
  );
}

export default LoginPage;
