import React from "react";

const PrescripcionPage = () => {
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="">
        <h1>Generar prescripcion</h1>

        <div>
          <select name="cliente" id="cliente">
            <option value="cliente1">Cliente 1</option>
            <option value="cliente2">Cliente 2</option>
            <option value="cliente3">Cliente 3</option>
          </select>

          <button>Agregar Cliente</button>
        </div>

        <div>
            <h2>Visión de lejos</h2>
          <table>
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
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
            <h2>Visión de cerca</h2>
          <table>
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
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
                <td>
                  <input type="text" className="w-10" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default PrescripcionPage;
