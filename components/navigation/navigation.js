import React from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import NavigationButton from '../button/navigation-button'
import {MENU} from '../../constants'
import TextTitle from '../text/text-title'
import styles from './navigation.module.css'



function Navigation({ flat = false,selectedForStorybook }) {
  
  const router = useRouter();
   
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        try {
          const selected = router.pathname === menu.path
          return (
            <NavigationButton
              key={menu.key}
              notify={menu.notify < 1 ? null : menu.notify}
              selected={selected}
              href = {menu.path}
              className={cn(styles.navButton,menu.key)}
            >
              {selected ? menu.iconSelected:menu.icon}
              {!flat && menu.title.length > 0 ? (
                <TextTitle>{menu.title}</TextTitle>
              ) : null}
            </NavigationButton>
          )
        } catch (error) {
         const selected = selectedForStorybook
          return (
            <NavigationButton
              key={menu.key}
              notify={menu.notify < 1 ? null : menu.notify}
              selected={selected}
              href = {menu.path}
              className={cn(styles.navButton,menu.key)}
            >
              {selected ? menu.iconSelected:menu.icon}
              {!flat && menu.title.length > 0 ? (
                <TextTitle>{menu.title}</TextTitle>
              ) : null}
            </NavigationButton>
          )
        }
         
        
        
      })}
    </nav>
  )
}

export default Navigation
