import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.min.js');
}

const nombresPlantas = [
  "Lengua de Suegra",
  "Coral Bells",
  "Hiedra del Diablo",
  "Palma de Madagascar",
  "Planta de Hierro",
  "Verde para Siempre"
];

const clasesImagenes = [styles.imagen1, styles.imagen2, styles.imagen3, styles.imagen4, styles.imagen5, styles.imagen6];

export default function Carrusel() {
  return (
  
      <div id="demo" className={`${styles.body} carousel slide`} data-bs-ride="carousel">
        {/* Cada uno de los botones representa cada una de 
        las imagenes como si fuera en una lista empieza en 0 */}
        {/*"carousel-indicators" son los botones que se ven en la parrte inferior*/} 
        <div className={`${styles['carousel-indicators']} carousel-indicators`} > 
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className='active'></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
        </div>
        <div className="carousel-inner">
        {/* "carousel-inner" ingresa las diapositivas */}
        {Array.from(Array(6).keys()).map((index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="6000">
              <header className={`${styles.imagenes} ${clasesImagenes[index]}`}>
                <div className={`${styles.contenedor}`}>
                  <div className={`${styles.barra}`}>
                    <a className={`${styles.logo} ${styles.a}`} href="/">
                      <h1 className={`${styles.logo__nombre} ${styles.centrar__texto} ${styles.h1}`}>Titulo</h1>
                    </a>
                    <nav className={`${styles.navegacion}`}>
                      <a href="/nosotros" className={`${styles.navegacion__enlace} ${styles.a}`}>Nosotros</a>
                      <a href="/productos" className={`${styles.navegacion__enlace} ${styles.a}`}>Productos</a>
                      <a href="/contacto" className={`${styles.navegacion__enlace} ${styles.a}`}>Contacto</a>
                    </nav>
                  </div> {/* .barra */}
                </div> {/* .contenedor */}
                <div className={`${styles.header__texto}`}>
                  <h2 className={`${styles.h2}`}>{nombresPlantas[index]}</h2>
                  <p className={`${styles.p}`}>{nombresPlantas[index]}</p>
                </div>
              </header>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
      </div> /* /Aqui se termina el carrusel .carousel y .slide/ */   
  )
}
