import React from 'react'
import cn from 'classnames'

import styles from './button.module.css'

function Button({ full = false,children,className, ...props }) {
  return (
    <button type="button" className={cn(styles.button,className,full && styles.fullWidth) } {...props}>
      {children}
    </button>
  )
}

export default Button
