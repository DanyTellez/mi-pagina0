import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Carrusel from './carrusel'
import Encabezado from './encabezado'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Carrusel/>
      
      <div className={`${styles.contenedor} ${styles.contenido__principal} `}>
          <article className={`${styles.entrada}`}>
              <div className={`${styles.margen}`}>
                <img className={`${styles.imagen}`} src="/img/ImagenX.jpg" alt='Imagenx' />
              </div>
              <div className={`${styles.entrada__contenido}`}>
                  <p>
                      Nullam at condimentum ante, sit amet imperdiet lacus. 
                      Nulla ac maximus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                      Mauris sodales ultrices nunc et accumsan. Donec diam mi, laoreet nec ligula quis, tristique fermentum ipsum.
                  </p>
                  <a href="/productos" className={`${styles.boton} ${styles.boton__primario}`}>Productos</a>
              </div>
          </article>

          <article className={`${styles.entrada}`}>
              <div className={`${styles.margen}`}>
                <img className={`${styles.imagen}`} src="/img/ImagenX.jpg" alt='Imagenx'/>
              </div>
              <div className={`${styles.entrada__contenido}`}>
                  <p>
                      Nullam at condimentum ante, sit amet imperdiet lacus. 
                      Nulla ac maximus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                      Mauris sodales ultrices nunc et accumsan. Donec diam mi, laoreet nec ligula quis, tristique fermentum ipsum.
                  </p>
                  <a href="/productos" className={`${styles.boton} ${styles.boton__primario}`}>Productos</a>
              </div>
          </article>

          <article className={`${styles.entrada} ${styles.grid3}`}>
              <div className={`${styles.margen}`} >
                <img className={`${styles.imagen}`} src="/img/ImagenX.jpg" alt='Imagenx'/>
              </div>
              <div className={`${styles.entrada__contenido}`}>
                  <p>
                      Nullam at condimentum ante, sit amet imperdiet lacus. 
                      Nulla ac maximus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                      Mauris sodales ultrices nunc et accumsan. Donec diam mi, laoreet nec ligula quis, tristique fermentum ipsum.
                  </p>
                  <a href="/productos" className={`${styles.boton} ${styles.boton__primario}`}>Productos</a>
              </div>
          </article>
      </div>

      <Encabezado/>
    </>
  )
}
if (typeof document !== 'undefined') {
  Home()
}
