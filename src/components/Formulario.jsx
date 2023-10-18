import { useState } from "react";

const formInicial = {
  id: null,
  Nombre: "",
  Precio: "",
  Stock: "",
  Marca: "",
  Detalles: "",
  Foto: "",
  Envío: false,
};

const Formulario = () => {
  const [form, setForm] = useState(formInicial);
  const handleChange = (e) => {
    const { type, name, checked, value } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = () => {};
  const handleReset = () => {};
  return (
    <>
      <h3>Agregar : Editar</h3>;
      <form>
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input
            type="text"
            name="precio"
            id="lbl-precio"
            value={form.Precio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input
            type="text"
            name="stock"
            id="lbl-stock"
            value={form.Stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input
            type="text"
            name="marca"
            id="lbl-marca"
            value={form.Marca}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input
            type="text"
            name="detalles"
            id="lbl-detalles"
            value={form.Detalles}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input
            type="text"
            name="foto"
            id="lbl-foto"
            value={form.Foto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input
            type="checkbox"
            name="envio"
            id="lbl-envio"
            checked={form.Envío}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar</button>
        <button type="reset">Limpiar</button>
      </form>
    </>
  );
};

export default Formulario;
