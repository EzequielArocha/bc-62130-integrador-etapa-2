import "./Carrito.scss";

const carrito = () => {
  return (
    <>
      <h1>Listado de productos en el carrito</h1>
      <table className="table-carrito">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>foto</td>
            <td>nombre</td>
            <td>cantidad</td>
            <td>precio</td>
            <td>acciones</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default carrito;
