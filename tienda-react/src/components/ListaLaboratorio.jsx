import { useEffect, useState } from 'react';

export default function ListaLaboratorio() {
  const [equipos, setEquipos] = useState(() => {
    const guardados = localStorage.getItem('equipos_labster');
    return guardados ? JSON.parse(guardados) : [
      { id: 1, nombre: "Microscopio", uso: "Observación de muestras biológicas a microescala", stock: 3 },
      { id: 2, nombre: "Probeta", uso: "Medición precisa de volúmenes de líquidos", stock: 10 }
    ];
  });

  const [nombre, setNombre] = useState('');
  const [uso, setUso] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    localStorage.setItem('equipos_labster', JSON.stringify(equipos));
  }, [equipos]);

  const agregarEquipo = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || uso.trim() === "" || stock === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevoEquipo = {
      id: Date.now(),
      nombre: nombre.trim(),
      uso: uso.trim(),
      stock: Number(stock)
    };

    setEquipos([...equipos, nuevoEquipo]);
    setNombre("");
    setUso("");
    setStock("");
  };

  const eliminarEquipo = (id) => {
    const confirmar = window.confirm("¿Seguro que desea eliminar este equipo?");
    if (!confirmar) return;
    setEquipos(equipos.filter((equipo) => equipo.id !== id));
  };

  return (
    <main className="contenedor">
      <h1>Labster - Gestión de Equipos</h1>

      <section className="formulario-producto">
        <h2>Registrar Nuevo Instrumento</h2>
        <form onSubmit={agregarEquipo}>
          <input
            type="text"
            placeholder="Nombre del equipo (Ej. Matraz)"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="¿Para qué sirve? (Uso)"
            value={uso}
            onChange={(e) => setUso(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cantidad disponible"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <button type="submit">Agregar a Labster</button>
        </form>
      </section>

      <h2>Fichas de Equipos de Laboratorio</h2>
      <section className="productos">
        {equipos.map((equipo) => (
          <article className="producto-item" key={equipo.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{equipo.nombre}</h3>
            <p><strong>Uso:</strong> {equipo.uso}</p>
            <p><strong>Disponibles:</strong> {equipo.stock}</p>
            <button onClick={() => eliminarEquipo(equipo.id)}>Eliminar Ficha</button>
          </article>
        ))}
      </section>
    </main>
  );
}