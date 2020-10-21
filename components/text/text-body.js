import React from 'react'
import cn from 'classnames'
import styles from './text-body.module.css'

export default function TextBody({bold=false,className, children,...props}) {
    return (
        <span className={cn(styles.body && styles.bold,className)} {...props}>
           {children} 
        </span>
    )
}
