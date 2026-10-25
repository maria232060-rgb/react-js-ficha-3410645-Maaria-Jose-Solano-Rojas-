import { useEffect, useState } from 'react';
import ProductoCard from './components/ProductoCard';
import BuscadorPokemon from './components/BuscadorPokemon';
import './App.css';

function App() {
  const [productos, setProductos] = useState(() => {
    const guardados = localStorage.getItem('productos');
    return guardados ? JSON.parse(guardados) : [
      { id: 1, nombre: "Mouse", precio: 50000, stock: 5 },
      { id: 2, nombre: "Teclado", precio: 90000, stock: 2 }
    ];
  });

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
  }, [productos]);

  const guardarProducto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio === "" || stock === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (Number(precio) <= 0 || Number(stock) < 0) {
      alert("Revise precio y stock");
      return;
    }

    if (editandoId === null) {
      const nuevoProducto = {
        id: Date.now(),
        nombre: nombre.trim(),
        precio: Number(precio),
        stock: Number(stock)
      };
      setProductos([...productos, nuevoProducto]);
    } else {
      const actualizados = productos.map((producto) =>
        producto.id === editandoId
          ? {
              ...producto,
              nombre: nombre.trim(),
              precio: Number(precio),
              stock: Number(stock)
            }
          : producto
      );
      setProductos(actualizados);
      setEditandoId(null);
    }

    setNombre("");
    setPrecio("");
    setStock("");
  };

  const editarProducto = (producto) => {
    setEditandoId(producto.id);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setStock(producto.stock);
  };

  const eliminarProducto = (id) => {
    const confirmar = window.confirm("¿Seguro que desea eliminar este producto?");
    if (!confirmar) return;
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      <section className="formulario-producto">
        <h2>{editandoId === null ? "Agregar producto" : "Actualizar producto"}</h2>
        <form onSubmit={guardarProducto}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <button type="submit">
            {editandoId === null ? "Agregar" : "Actualizar"}
          </button>
        </form>
      </section>

      <h2>Lista de productos</h2>

      <section className="productos">
        {productos.map((producto) => (
          <article className="producto-item" key={producto.id}>
            <ProductoCard producto={producto} />
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <div className="acciones-producto">
              <button onClick={() => editarProducto(producto)}>
                Editar
              </button>
              <button onClick={() => eliminarProducto(producto.id)}>
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* AQUÍ VA EL BUSCADOR DE LA POKÉAPI (AL FINAL DE LA ETIQUETA MAIN) */}
      <BuscadorPokemon />
    </main>
  );
}

export default App;