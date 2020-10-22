import React from 'react'
import cn from 'classnames'
import Navigation from '../navigation/navigation'
import ThemeButton from '../theme-button/theme-button'
import ProfileBox from '../profile-box/profile-box'

import styles from './col-sidebar.module.css'
import TweetModal from '../tweet-modal/tweet-modal'

export default function Sidebar({ flat }) {

  const [isShowModal,isShowModalState] = React.useState(false);

  const onModalClose =()=>{
    isShowModalState(false);
  }

  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat}></Navigation>


      <div className={styles.tweet}>
        <ThemeButton onClick={()=>{isShowModalState(true)}} big full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>

      {isShowModal && <TweetModal onModalClose={onModalClose} onClick={()=>onModalClose()} ></TweetModal>}


      <div className={styles.profile}>
        <ProfileBox flat={flat}></ProfileBox>
      </div>


    </div>
  )
}
