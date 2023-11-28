import React from "react";

const PrescripcionPage = () => {
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" className=" flex flex-col p-10 bg-slate-200 shadow-md rounded-lg justify-center">
        <h1 className="text-5xl font-extrabold mb-20 text-center">Generar prescripcion</h1>

        <div className="flex flex-row w-full justify-center">
          <select name="cliente" id="cliente" className="h-9 w-1/2 mr-5">
            <option value="cliente1">Cliente 1</option>
            <option value="cliente2">Cliente 2</option>
            <option value="cliente3">Cliente 3</option>
          </select>

          <button className="bg-teal-600 text-white py-2 px-4 rounded-lg ">Agregar Cliente</button>
        </div>

        <div className="">
            <h2 className="my-5 text-3xl font-bold text-center">Visión de lejos</h2>
          <table className="bg-white w-full ">
            <thead>
              <tr>
                <th>Esfera</th>
                <th>Cilindro</th>
                <th>Eje</th>
                <th>A/V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div>
            <h2 className="my-5 text-3xl font-bold text-center">Visión de cerca</h2>
          <table className="bg-white w-full">
            <thead>
              <tr>
                <th>Esfera</th>
                <th>Cilindro</th>
                <th>Eje</th>
                <th>A/V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
                <td>
                  <input type="text" className="w-full" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="bg-teal-600 text-white py-5 px-4 rounded-lg font-bold text-lg mt-10">Emitir Prescripcion</button>
      </form> 
    </div>
  );
};

export default PrescripcionPage;
