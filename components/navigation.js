import React from 'react'

import NavigationButton from './navigation-button'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'
import TextTitle from './text-title'
import styles from './navigation.module.css'

const MENU = [
  { key: 'twitter', icon: <Twitter />, title: '', notify: 0 },
  { key: 'home', icon: <Home />, title: 'Home', notify: 0 },
  { key: 'explore', icon: <Explore />, title: 'Explore', notify: 0 },
  { key: 'notification', icon: <Notification />, title: 'Notification', notify: 17 },
  { key: 'messages', icon: <Messages />, title: 'Messages', notify: 0 },
  { key: 'bookmark', icon: <Bookmark />, title: 'Bookmark', notify: 0 },
  { key: 'lists', icon: <Lists />, title: 'Lists', notify: 0 },
  { key: 'profile', icon: <Profile />, title: 'Profile', notify: 0 },
  { key: 'more', icon: <More />, title: 'More', notify: 0 }
]

function Navigation({ flat = false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      <p>{JSON.stringify(flat)}</p>
      {MENU.map((menu) => (
       
        <NavigationButton key={menu.key} notify={menu.notify < 1 ? null:menu.notify} selected={selectedKey === menu.key}>
          {menu.icon}
          {!flat && menu.title.length > 0 ? <TextTitle>{menu.title}</TextTitle>:null}
         
        </NavigationButton>
      ))}
    </nav>
  )
}

export default Navigation
