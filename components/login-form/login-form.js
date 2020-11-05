import React, { useContext, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './login-form.module.css'
import {Twitter} from '../icons'
import StoreContext from '../../store/index'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Zorunlu alan'),
  lastName: Yup.string().required('Zorunlu alan')
  // email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
})



export default function LoginForm({}) {
  const [showError, ShowError] = useState(false);

  const store = useContext(StoreContext)
  
  return (
    <div className={styles.mainDiv} >
      <div  className={styles.container}>
      <div className={styles.logoParent}>
        <Twitter className={styles.logo} ></Twitter>
       
        <span className={styles.span}>Twitter'a giriş yap</span>
      </div>
      <Formik
        initialValues={{ lastName: '', firstName: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          store.loginUser(JSON.stringify( values));
          if (values.firstName.toLocaleLowerCase() === 'admin' && values.lastName.toLocaleLowerCase() === '123') {
            console.log(values)          
              window.location = '/main'
          } else {
            document.getElementById("lastName").value = ""
           
            ShowError(true);
           
          }
         
        }}
      
      >
        
        {({ handleSubmit, handleChange, values, errors }) => (
          
          <form className={styles.form} onSubmit={handleSubmit}>
             {showError ? (<div  > <span className={styles.error} >Girdiğin kullanıcı adı ve şifre kayıtlarımızdakiyle eşleşmedi. Lütfen doğru girdiğinden emin ol ve tekrar dene.</span> </div>):null}
            <div className={styles.first}>
             
              <label className={styles.label}>
                <div className={styles.labelalti}>
                  <div>
                    <span>Telefon, e-posta veya kullanıcı adı</span>
                  </div>
                  <div>
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        values={values.firstName}
                      />
                      {/* {errors.firstName && errors.firstName} */}
                    </div>
                  </div>
                </div>
              </label>
              <div></div>
            </div>
            <div className={styles.first}>
              <label className={styles.label}>
                <div className={styles.labelalti}>
                  <div>
                    <span>Şifre</span>
                  </div>
                  <div>
                    <div>
                      <input
                        type="password"
                        name="lastName"
                        onChange={handleChange}
                        values={values.lastName}
                        id="lastName"
                      />
                      {/* {errors.lastName && errors.lastName} */}
                    </div>
                  </div>
                </div>
              </label>
              <div></div>
            </div>
            {/* <input
              type="text"
              name="lastName"
              placeholder="Soyad"
              onChange={handleChange}
              values={values.lastName}
            />
            {errors.lastName && errors.lastName}
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              values={values.email}
            />
            {errors.email && errors.email} */}
            {/* {ButtonText ? (
              <button type="submit">Giriş Yap</button>
            ) : (
              <button>yükleniyor</button>
            )} */}
            {values.lastName !== '' && values.firstName !== '' ? (
              <button className={styles.buttonNotDisable} type="submit">
                Giriş Yap
              </button>
            ) : (
              <button disabled type="submit">
                Giriş Yap
              </button>
            )}

           
          </form>
        )}
      </Formik>

      </div>
     
    </div>
  )
}
