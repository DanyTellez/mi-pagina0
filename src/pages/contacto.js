import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Carrusel from './carrusel'
import Encabezado from './encabezado'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
    <Carrusel/>
      
    <main className={`${styles.contenedor}`}>
        <h3 className={`${styles.centrar__texto} ${styles.h3}`}>Contacto</h3> 
    

    <form className={`${styles.formulario} ${styles['input-group-lg>.btn']}`}>
      <div className={`${styles.campo} input-group mb-4 input-group-lg`} >
        <span className='input-group-text'>Nombre</span>
        <input type='text' className='form-control' placeholder='Nombre Completo'></input>
      </div>

      <div className={`${styles.campo} input-group mb-4 input-group-lg`} >
        <span className='input-group-text'>Correo</span>
        <input type='text' className='form-control' id='email' placeholder='Introduzaca su correo electrónico'></input>
      </div>

      <div className={`${styles.campo}`}>
        <label for="comentario">Comentarios</label>
        <textarea className='form-control' rows={3} id='comentario' name='text'></textarea>  
      </div>
      
    </form>
    </main>
    <Encabezado/>
    </>
  )
}
