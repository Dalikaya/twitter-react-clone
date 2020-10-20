import React, { useContext,useState } from 'react'
import cn from 'classnames'
import styles from './theme-select.module.css'
import StoreContext from '../store/index'

const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark'
}

export default function ThemeSelect() {
  const store = useContext(StoreContext)

  return (
    <div className={styles.container}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            name="theme"
            value={theme}
            checked={theme === store.theme}
            onChange={(e)=>store.changeTheme(e.target.value)}
          ></input>
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}
