import React from 'react'
import cn from 'classnames'
import styles from './text-title.module.css'

export default function TextTitle({bold=true, children}) {
    return (
        <h2 className={cn(styles.title,bold && styles.bold)}>
           {children} 
        </h2>
    )
}
