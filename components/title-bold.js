import React from 'react'
import styles from './title-bold.module.css'

export default function TitleBold({children}) {
    return (
        <h2 className={styles.titleBold}>
           {children} 
        </h2>
    )
}
