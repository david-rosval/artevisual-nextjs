import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between bg-teal-800 px-24 items-center">
      <h2 className="text-white text-3xl font-bold px-5 h-full">Arte Visual</h2>
      <ul className="flex text-white text-lg justify-center">
        {!session?.user ? (
          <>
            <li className="hover:bg-teal-900 hover:font-semibold h-[3rem] px-5 align-middle flex items-center">
              <Link href="/">Pantalla principal</Link>
            </li>
            <li className="hover:bg-teal-900 hover:font-semibold h-[3rem] px-5 align-middle flex items-center">
              <Link href="/auth/login">Iniciar Sesión</Link>
            </li>
            <li className="hover:bg-teal-900 hover:font-semibold h-[3rem] px-5 align-middle flex items-center">
              <Link href="/auth/register">Registrarse</Link>
            </li>
          </>
        ) : (
          <>
            <li className="hover:bg-teal-900 hover:font-semibold h-[3rem] px-5 align-middle flex items-center">
              <Link href="/inicio">Inicio</Link>
            </li>
            <li className="hover:bg-teal-900 hover:font-semibold h-[3rem] px-5 align-middle flex items-center">
              <Link href="/inicio/prescripcion">Emitir Prescripción</Link>
            </li>
            <li className="hover:bg-teal-900 hover:font-semibold h-[3rem] px-5 align-middle flex items-center">
              <Link href="/inicio/clientes">Clientes</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
