import { useState, useEffect } from 'react'

function App() {

  //Componente
  const FollowMouse = () => {
    return (
      <main>
        <div style={{
          position: 'absolute',
          backgroundColor: 'violet',
          opacity: 0.3,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          top: '-15px',
          bottom: '1px',
          left: '-21px',
          pointerEvents: 'none',
          border: '3px solid white',
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: 1
        }}></div>
        <h1>Mouse Follower</h1>
        <div className='contenedorBoton'>
          <button onClick={activarAnimacion}>{enabled ? 'Desactivar seguimiento del puntero' : 'Activar seguimiento del puntero'}</button>
        </div>
      </main>
    )
  }

  //Aqui empieza todo el tema
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  const activarAnimacion = () => {
    setEnabled(!enabled);
  }

  //useEffect para ocultar el cursor y solo dejar la animacion
  useEffect(() => {
    document.body.classList.toggle('ocultarCursor', enabled)

    return () => {
      document.body.classList.remove('ocultarCursor');
    }
  },[enabled])

  //useEffect para la actividad del cursor
  useEffect(() => {
    console.log('Effect: ', {enabled});

    const handleMove = (event) => {
      const {clientX, clientY} = event;
      //console.log('handleMove:', {clientX, clientY});
      setPosition({x: clientX, y: clientY});
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    // Este return es para limpiar el useEffect del evento de seguir el mouse
    // Estopara desmontar el componente y poder ejecutarlo cada vez que active o desactive la funcion (investiga)
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])

  return (
      <FollowMouse></FollowMouse>
  )
}

export default App
