import React from 'react'

import NavigationButton from './navigation-button'
import {MENU} from '../constants'
import TextTitle from './text-title'
import styles from './navigation.module.css'



function Navigation({ flat = false, selectedKey = 'messages' }) {
  return (
    <nav className={styles.nav}>
      <p>{JSON.stringify(flat)}</p>
      {MENU.map((menu) => {
        const selected = selectedKey === menu.key
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify < 1 ? null : menu.notify}
            selected={selectedKey === menu.key}
            href = {menu.path}
            className={styles.navButton}
          >
            {selected ? menu.iconSelected:menu.icon}
            {!flat && menu.title.length > 0 ? (
              <TextTitle>{menu.title}</TextTitle>
            ) : null}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
