// pages/_app.js //Global css kullanmamız için _app.js kullanıyoruz ve projeyi yeniden ayağa kaldır artık app.css kullanabiliriz
import React ,{useState, useEffect,useLayoutEffect} from 'react'
import '../styles/app.css'
import StoreContext from '../store/index'

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null)

  const [user, userSet] = useState(null)

  const [tweets,tweetSet] = useState(null)
  //useLayout sayfa yüklendikten hemen sonra useEffecten önce çalışır ve localStorage dan verilerimiz getirir themeSet ile de Stateimizi günceller
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
  const loginUser = user => {
    userSet(user)
    localStorage.setItem("USER",user)
  }
  
  const GetloginUser = ()=>{
    return JSON.parse( localStorage.getItem("USER"))
  }

  const GetAllTweets = () =>{
   const AllTweets =  JSON.parse( localStorage.getItem("TWEET"))
   tweetSet(AllTweets)
    
  }

  

//useLayoutEffectten sonra çalışır - useEffect theme state imizi izler değiştikçe html etiketimize class atıp silme işlemini yapar
  useEffect(() => {
    document.querySelector("html").removeAttribute("class");
    document.querySelector("html").classList.add(theme)
    
  }, [theme])
  return (
    // komponentlerimize gitmesi gereken datayı ana kompponentimizde app imiz içinde tuttuk ve value={{theme,changeTheme}} diye aşağıya gönderdik
    <StoreContext.Provider value={{ theme,changeTheme,user,loginUser,GetloginUser,GetAllTweets,tweets}}>
      {/* bütün satfalarımızı context.providerımızı ile sarmaladık */}
      <Component {...pageProps}></Component>
    </StoreContext.Provider>
  )
}
