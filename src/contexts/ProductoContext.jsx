import { useState, createContext, useEffect } from "react";
import { del, get, post, put } from "../utils/http";

const ProductoContext = createContext();
const url = "https://65374a30bb226bb85dd30a16.mockapi.io/productos";

const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const products = await get(url);
      setProductos(products);
    } catch (error) {
      console.error("Ocurrió un error en obtenerProductos()", error);
    }
  };

  const crearProductoContext = async (productoNuevo) => {
    try {
      const productoBackNuevo = await post(url, productoNuevo);
      setProductos([...productos, productoBackNuevo]);
    } catch (error) {
      console.error("Fallo crearProductoConext", error);
    }
  };

  const actualizarProductoContext = async (productoAEditar) => {
    try {
      const productoEditado = await put(
        url,
        productoAEditar.id,
        productoAEditar
      );
      console.log(productoEditado);
      const nuevaDB = productos.map((producto) =>
        producto.id === productoEditado.id ? productoEditado : producto
      );
      setProductos(nuevaDB);
    } catch (error) {
      console.error("Ocurrió un problema en actualizarProductoContext", error);
    }
  };

  const eliminarProductoContext = async (id) => {
    try {
      const productoEliminado = await del(url, id);
      console.log(productoEliminado);
      let nuevaDB = productos.filter((producto) => producto.id !== id);
      setProductos(nuevaDB);
    } catch (error) {
      console.error("Algo pasó en el eliminarProductoContext", error);
    }
  };

  const data = {
    productos,
    crearProductoContext,
    eliminarProductoContext,
    actualizarProductoContext,
  };
  return (
    <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
  );
};

export { ProductoProvider };

export default ProductoContext;
