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
        <h3 className={`${styles.centrar__texto} ${styles.h3} ${styles.contacto__color}`}>Contacto</h3> 
    

    <form className={`${styles.formulario}  formulario1`}>
      <div className={`${styles.campo} input-group mb-4 input-group-lg`} >
        <span className='input-group-text'>Nombre</span>
        <input type='text' className='form-control' placeholder='Nombre Completo'></input>
      </div>

      <div className={`${styles.campo} input-group mb-4 input-group-lg`} >
        <span className='input-group-text'>Correo</span>
        <input type='text' className='form-control' id='email' placeholder='Introduzca su correo electrónico'></input>
      </div>

      <div className={`${styles.campo} form-floating`}>
        <textarea className='form-control' placeholder="Leave a comment here" id='floatingTextarea2' style={{height: '19rem'}}></textarea>
        <label for="floatingTextarea">Comentarios</label> 
      </div>
      
    </form>
    </main>
    <Encabezado/>
    </>
  )
}
