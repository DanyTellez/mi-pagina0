import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Carrusel from './carrusel'
import Encabezado from './encabezado'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
    <Carrusel/>  
         
    <main className={`${styles.contenedor}`}>
        <h3 className={`${styles.centrar__texto} ${styles.h3}`}>Sobre Nosotros</h3> 
    </main>

    <Encabezado/>
    </>
  )
}
