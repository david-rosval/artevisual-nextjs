import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        dni: { label: "DNI", type: "text", placeholder: "Ej. 12345678" },
        clave: { label: "Clave", type: "password", placeholder: "*******" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        
        const userFound = await db.user.findUnique({
            where: {
                dni: credentials.dni,
            }
        })
        if (!userFound) throw new Error('Usuario no encontrado')
       
        console.log(userFound);

        const matchPassword = await bcrypt.compare(credentials.clave, userFound.clave)

        if (!matchPassword) throw new Error('Contraseña incorrecta')

        return {
            id: userFound.id,
            name: userFound.nombrecompleto,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  }
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
