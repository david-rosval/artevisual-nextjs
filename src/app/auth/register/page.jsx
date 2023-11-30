"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.clave !== data.confirmarClave) {
      return alert("Las contraseñas no coinciden");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        nombrecompleto: data.nombrecompleto,
        dni: data.dni,
        clave: data.clave,
        pregunta: data.pregunta,
        respuesta: data.respuesta,
        estado: "activo",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="w-[40rem] p-10 bg-slate-200 shadow-md rounded-lg"
      >
        <h1 className="text-5xl font-extrabold mb-10 text-center">
          Registrar usuario
        </h1>

        <label htmlFor="nombrecompleto" className="font-bold text-gray-700">
          Nombres y Apellidos
        </label>
        <input
          type="text"
          {...register("nombrecompleto", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
          })}
          className="p-3 rounded-md block mb-2 bg-white w-full border-2"
          placeholder="Ej. Juan Perez"
        />
        {errors.nombrecompleto && (
          <span className="text-red-500">{errors.nombrecompleto.message}</span>
        )}

        <label htmlFor="dni" className="block font-bold text-gray-700 mt-2 uppercase">
          dni
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

        <label htmlFor="clave" className="block font-bold text-gray-700 mt-2">
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
          placeholder="*********"
        />
        {errors.clave && (
          <span className="text-red-500">{errors.clave.message}</span>
        )}

        <label
          htmlFor="confirmarClave"
          className="block font-bold text-gray-700 mt-2"
        >
          Confirmar Contraseña
        </label>
        <input
          type="password"
          {...register("confirmarClave", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
          })}
          className="p-3 rounded-md block mb-2 bg-white w-full border-2"
          placeholder="*********"
        />
        {errors.confirmarClave && (
          <span className="text-red-500">{errors.confirmarClave.message}</span>
        )}

        <label
          htmlFor="pregunta"
          className="block font-bold text-gray-700 mt-2"
        >
          Pregunta de Recuperación de contraseña
        </label>
        <input
          type="text"
          {...register("pregunta", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
          })}
          className="p-3 rounded-md block mb-2 bg-white w-full border-2"
          placeholder="Ej. ¿Cuál es el nombre de tu mascota?"
        />
        {errors.pregunta && (
          <span className="text-red-500">{errors.pregunta.message}</span>
        )}

        <label
          htmlFor="respuesta"
          className="block font-bold text-gray-700 mt-2"
        >
          Respuesta
        </label>
        <textarea
          {...register("respuesta", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
          })}
          className="p-3 rounded-md block mb-2 bg-white w-full border-2"
          placeholder="Ej. Mi mascota se llama Fido"
        />
        {errors.respuesta && (
          <span className="text-red-500">{errors.respuesta.message}</span>
        )}

        <button className="w-full bg-teal-600 text-white text-lg font-bold p-4 rounded-md hover:bg-teal-700 mt-10">
          Registrar
        </button>
        <a
          className="mt-2 block underline clickable text-right cursor-pointer text-teal-600"
          onClick={() => {
            router.push("/auth/login");
          }}
        >Ya tengo una cuenta</a>
      </form>
    </div>
  );
}

export default RegisterPage;
