import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Encabezado from './encabezado'


const inter = Inter({ subsets: ['latin'] })

const claseInput = "form-control rounded-pill fs-4 bg-success bg-opacity-25 mb-3 ps-5 py-3"

export default function Home() {


    function handleClick() {
        alert('¡Me hiciste clic!');
      }
  return (
    <> 
    
        <div className='row'>
            <section className='col'>
                <div className={`${styles.bg}`}></div>
            </section>
            
            <div className='col position-relative pb-5'>
                <div className='position-relative top-50 start-50 translate-middle'>
                <div className='d-flex justify-content-center'>
                    <a href='/'>
                        <img src='/img/Dream macets.png' className='d-flex justify-content-center'></img>    
                    </a>
                    
                </div>    
                <div className={`text-center h1 ${styles.colorRegistro}`}>Registra tus datos:</div>
                    <main className='d-flex justify-content-center'>
                        <form className='col-7'>
                            <div>
                                <label htmlFor='nombre' className='form-label'></label>
                                <input type='text' className={claseInput} placeholder='Nombre*' id='nombre'></input>
                            </div>
                            <div>
                                <label htmlFor='apellido' className='form-label'></label>
                                <input type='text' className={claseInput} placeholder='Apellido*' id='apellido'></input>
                            </div>
                            <div>
                                <label htmlFor='email' className='form-label'></label>
                                <input type='text' className={claseInput} placeholder='Correo electronico*' id='email'></input>
                            </div>
                            <div>
                                <label htmlFor='telefono' className='form-label'></label>
                                <input type='text' className={claseInput} placeholder='Número de telefono*' id='telefono'></input>
                            </div>
                            <div>
                                <label htmlFor='password' className='form-label'></label>
                                <input type='text' className={claseInput} placeholder='Contraseña*' id='password'></input>
                            </div>
                            <div>
                                <label htmlFor='passwordC' className='form-label'></label>
                                <input type='text' className={claseInput} placeholder='Confirmar contraseña*' id='passwordC'></input>
                            </div>
                            <div className='form-check ps-5'>
                                <input className='form-check-input fs-5' type='checkbox' value={""} id='terminos'></input>
                                <label className='form-check-label fs-5' for='terminos'>Aceptar Terminos y Condiciones</label>
                            </div>

                            <div className='d-grid justify-content-center p-5'>
                                <button onClick={handleClick} type='submit' className='btn btn-primary btn-lg fs-4 px-5 py-3 rounded-pill'>Enviar</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>    
    <Encabezado/>
    </>
  )
}
