 // pages/_app.js //Global css kullanmamız için _app.js kullanıyoruz ve projeyi yeniden ayağa kaldır artık app.css kullanabiliriz
 import React from 'react';
import '../styles/app.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}