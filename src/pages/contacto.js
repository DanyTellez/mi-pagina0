import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Carrusel from './carrusel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Carrusel/>
      </div>
      <main class="contenedor">
        <h3 className={`${styles.centrar__texto} ${styles.h3}`}>Contacto</h3> 
    </main>

      <footer className={`${styles.footer}`}>
        <div className={`${styles.contenedor}`}>
          <div className={`${styles.barra2}`}>
              <a className={`${styles.logo} ${styles.a}`}  href='/'>
                  <h1 className={`${styles.logo__nombre} ${styles.centrar__texto} ${styles.h1}`}>Titulo</h1>
              </a>
              <nav className={`${styles.navegacion}`}>
                  <a href='/nosotros' className={`${styles.navegacion__enlace} ${styles.a}`}>Nosotros</a>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-xd" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 8l4 8" />
                    <path d="M6 16l4 -8" />
                    <path d="M14 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
                  </svg>
                  <a href='/productos' className={`${styles.navegacion__enlace} ${styles.a}`}>Productos</a>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
                    <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                    <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                    <path d="M12 15l0 -6" />
                  </svg>
                  <a href='/contacto' className={`${styles.navegacion__enlace} ${styles.a}`}>Contacto</a> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg> 
              </nav>
          </div>
        </div>
      </footer>
      </>
  )
}
