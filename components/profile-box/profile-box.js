import React, { useContext, useState, useLayoutEffect } from 'react'
import cn from 'classnames'
import styles from './profile-box.module.css'
import Photo from '../photo/photo'
import Button from '../button/button'
import TextBody from '../text/text-body'
import { ArrowBottom } from '../icons'


export default function ProfileBox({ flat = false }) {
  const [user, getUser] = useState({})

  useLayoutEffect(() => {
    getUser(JSON.parse(localStorage.getItem('USER')))
  }, [])
  if (user !== null) {
    return (
             
          <Button className={cn(styles.box)}>
            <Photo size={39} />
            {/* birden fazla tagi kapatmak için fragment <></> kullanıyoruz  flat ise gösterme değilse göster*/}
            {!flat && (
              <>
                <div className={styles.body}>
                  <TextBody bold>{user.firstName}</TextBody>
                  <TextBody className={styles.slug}>@{user.firstName}</TextBody>
                </div>
                <ArrowBottom className={styles.icon}></ArrowBottom>
              </>
            )}
          </Button>
         
          
         
        
      
    )
  } else {
    
    return(
      <>
      
      </>
    )
    
  }
 
}
