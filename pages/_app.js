// pages/_app.js //Global css kullanmamız için _app.js kullanıyoruz ve projeyi yeniden ayağa kaldır artık app.css kullanabiliriz
import React ,{useState, useEffect,useLayoutEffect} from 'react'
import '../styles/app.css'
import StoreContext from '../store/index'

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null)

  useLayoutEffect(() => {
  
    const theme = localStorage.getItem('THEME') || 'dark'
   themeSet(theme)
  //ikiside aynı anlama denk gelir
//  if (localStorage.getItem('THEME') !== null) {
//    const theme = localStorage.getItem('THEME')
//    themeSet(theme)
//  }else{
//    themeSet('dark')
//  }
  }, [])

  const changeTheme = theme => {
    themeSet(theme)
    localStorage.setItem("THEME",theme)
  }
//theme state imizi izler değiştikçe html etiketimize class atıp siler
  useEffect(() => {
    document.querySelector("html").removeAttribute("class");
    document.querySelector("html").classList.add(theme)
  }, [theme])
  return (
    <StoreContext.Provider value={{ theme,changeTheme }}>
      <Component {...pageProps}></Component>
    </StoreContext.Provider>
  )
}
