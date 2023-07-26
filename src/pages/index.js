import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Carrusel from './carrusel'
import Encabezado from './encabezado'

import React from 'react';


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
    <div className='container'>
      <div className='row row-cols-sm-1 row-cols-md-2 row-cols-xl-3'>
          <article className={`${styles.entrada} col-12`}>
              <div className={`${styles.margen}`}>
                <img className='container' src="/img/ImagenX.jpg" alt='Imagenx' />
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

          <article className={`${styles.entrada} col-12`}>
              <div className={`${styles.margen}`}>
                <img className='container' src="/img/ImagenX.jpg" alt='Imagenx'/>
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

          <article className={`${styles.entrada} col-12`}>
              <div className={`${styles.margen}`} >
                <img className='container' src="/img/ImagenX.jpg" alt='Imagenx'/>
              </div>
              <div className={`${styles.entrada__contenido}`}>
                  <p>
                      Nullam at condimentum ante, sit amet imperdiet lacus. 
                      Nulla ac maximus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                      Mauris sodales ultrices nunc et accumsan. Donec diam mi, laoreet nec ligula quis, tristique fermen<i className="fas fa-home"></i>tum ipsum.
                  </p>
                  <a href="/productos" className={`${styles.boton} ${styles.boton__primario}`}>Productos</a>
              </div>
          </article>
      </div>  
    </div>

      <Encabezado/>
    </>
  )
}
if (typeof document !== 'undefined') {
  Home()
}
