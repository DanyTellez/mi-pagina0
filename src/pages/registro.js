import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Encabezado from './encabezado'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
    
    <div className='container'>
        <main className='col-6'>
            <div className='d-flex justify-content-center'>
                <img src='/img/Dream macets.png' href="/" className='d-flex justify-content-center'></img>
            </div>    
                <div className='text-center h1'>Registra tus datos</div>
            
            <form>
                <div>
                    <label className='form-label'></label>
                    <input className='form-control rounded-pill fs-3' placeholder='Nombre*'></input>
                </div>
                <div>
                    <label className='form-label'></label>
                    <input className='form-control rounded-pill fs-3' placeholder='Apellido*'></input>
                </div>
                <div>
                    <label className='form-label'></label>
                    <input className='form-control rounded-pill fs-3' placeholder='Correo electronico*'></input>
                </div>
                <div>
                    <label className='form-label'></label>
                    <input className='form-control rounded-pill fs-3' placeholder='Número de telefono*'></input>
                </div>
                <div>
                    <label className='form-label'></label>
                    <input className='form-control rounded-pill fs-3' placeholder='Contraseña*'></input>
                </div>
                <div>
                    <label className='form-label'></label>
                    <input className='form-control rounded-pill fs-3' placeholder='Confirmar contraseña*'></input>
                </div>

            </form>
        </main>
    </div>    
    <Encabezado/>
    </>
  )
}
