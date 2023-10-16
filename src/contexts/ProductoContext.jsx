import { useState, createContext, useEffect } from "react";
import { get } from "../utils/http";

const ProductoContext = createContext();
const url = "http://localhost:8080/productos/";

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

  const data = { productos };
  return (
    <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
  );
};

export { ProductoProvider };

export default ProductoContext;
