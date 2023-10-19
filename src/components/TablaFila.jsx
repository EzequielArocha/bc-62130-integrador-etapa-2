import { useContext } from "react";
import ProductoContext from "../contexts/ProductoContext";
import "./TablaFila.scss";

const TablaFila = ({ producto }) => {
  const { eliminarProductoContext } = useContext(ProductoContext);

  const handleDelete = (id) => {
    console.warn(id);

    let isDelete = window.confirm(`
      ¿Estás seguro de eliminar el producto con el 'id': ${id}
    `);

    if (isDelete) {
      eliminarProductoContext(id);
    } else {
      return; // break
    }
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? "Si" : "No"}</td>
      <td>
        <button onClick={() => handleUpdate(producto)}>Editar</button>
        <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
