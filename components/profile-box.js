import React from 'react'
import cn from 'classnames'
import styles from './profile-box.module.css'
import Photo from './photo'
import Button from './button'
import TextBody from './text-body'
import {ArrowBottom} from './icons'

export default function ProfileBox({ flat=false,
    name="Ali KAYA",
    slug="alikaya"
}) {
  return (
    <Button className={cn(styles.box)}>
     
      <Photo size={39}/>
      {/* birden fazla tagi kapatmak için frangment <></> kullanıyoruz  flat ise gösterme değilse göster*/ }
      {!flat && ( <>
       <div className={styles.body}>
          <TextBody bold>{name}</TextBody>
          <TextBody className={styles.slug}>@{slug}</TextBody>
        </div>
        <ArrowBottom className={styles.icon}></ArrowBottom>
       </>
       )}
      
          
    </Button>
  )
}
