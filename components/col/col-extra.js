import React, { useEffect, useContext, useState } from 'react'
import cn from 'classnames'

import styles from './col-extra.module.css'
import StoreContext from '../../store'
import ThemeButton from '../theme-button/theme-button'
import TextTitle from '../text/text-title'
import TextBody from '../text/text-body'

export default function Extra({ children }) {
  const store = useContext(StoreContext)
  const tagss = store.tags
  return (
    <div className={cn(styles.extra)}>
      {children}
      <>
      <div className={styles.tagDiv}>
      <div className={styles.header} >İlgini çekebilecek gündemler</div>
      {tagss && tagss.map((tag, index) => {
          return (<TextBody key={index}>
            <div  className={styles.tagsButtonDiv}>
            <span className={styles.span} >Türkiye tarihinde gündemde</span>
            <button className={styles.tagsButton} >{tag}</button>
            </div>
           
          </TextBody>)
        })}
      </div>
    
      
      </>
    </div>
  )
}
