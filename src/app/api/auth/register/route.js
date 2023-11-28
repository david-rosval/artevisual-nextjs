import { NextResponse } from "next/server";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();

    const userFound = await db.user.findUnique({
      where: {
        dni: data.dni,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: "El usuario ya existe",
        },
        {
          status: 400,
        }
      );
    }

    console.log(data);

    const claveHash = await bcrypt.hash(data.clave, 10);

    const newUser = await db.user.create({
      data: {
        nombrecompleto: data.nombrecompleto,
        dni: data.dni,
        clave: claveHash,
        pregunta: data.pregunta,
        respuesta: data.respuesta,
        estado: data.estado,
      },
    });

    const { clave: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
