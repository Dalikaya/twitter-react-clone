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
  More,
  HomeFill,
  ProfileFill,
  ListsFill,
  BookmarkFill,
  NotificationFill,
  ExplorerFill,
  MessagesFill
} from './icons'
import TextTitle from './text-title'
import styles from './navigation.module.css'

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    iconSelected: <Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    iconSelected: <ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: 'Notification',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    iconSelected: <BookmarkFill />,
    title: 'Bookmark',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    iconSelected: <More />,
    title: 'More',
    notify: 0
  }
]

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
