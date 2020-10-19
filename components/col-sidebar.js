import React from 'react'
import cn from 'classnames'
import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'

import styles from './col-sidebar.module.css'

export default function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
     
      <Navigation flat={flat}></Navigation>
      <ThemeButton big full={!flat }>
        {flat ? "a" :"Tweet"}
      </ThemeButton>
      <ProfileBox flat={flat}></ProfileBox>
    </div>
  )
}
