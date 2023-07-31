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
        <h3 className={`${styles.centrar__texto} ${styles.h3} ${styles.contacto__color}`}>Contacto</h3> 
    

    <form className={`${styles.formulario} formulario1 was-validated`} novalidate>
      <div className={`${styles.campo} input-group mb-4 input-group-lg`} htmlFor="nombre">
        <span className='input-group-text'>Nombre</span>
        
        <input  type='text' className='form-control' id='nombre' placeholder='Nombre Completo' required></input>
        
      </div>  

      <div className={`${styles.campo} input-group mb-4 input-group-lg`} htmlfor="correo">
        <span className='input-group-text'>Correo</span>
        <input type='email' className='form-control' id='email' htmlFor="correo" placeholder='Introduzca su correo electrónico' required></input>
      </div>

      <div className={`${styles.campo} form-floating`}>
        <textarea className='form-control' placeholder="Leave a comment here" id='floatingTextarea' style={{height: '19rem'}}></textarea>
        <label htmlFor="floatingTextarea">Comentarios</label> 
      </div>
      
      <div className={`${styles.boton__elementos} d-grid d-md-block d-md-flex justify-content-md-end`}>
        <button type="submit" className="btn btn-boton_personalizado btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-right-square " viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 3.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"></path>
                </svg>
                  {" Enviar "}  
        </button>
      </div>
    </form>
    </main>
    <Encabezado/>
    </>
  )
}
