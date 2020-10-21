import React from 'react'
import cn from 'classnames'

import styles from './col-main.module.css'

export default function Main({children}) {
    return (
        <div className={cn(styles.main)}>
            {children}
        </div>
    )
}
