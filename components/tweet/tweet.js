import React from 'react'
import Photo from '../photo/photo'
import date from 'date-fns/formatDistanceToNow'

import styles from './tweet.module.css'
import IconButton from '../button/icon-button'
import * as Icon from '../icons'

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/* avatar */}
      <div className={styles.avatar}>
        <Photo></Photo>
      </div>

      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name} >{name} </span> <span>@{slug} </span> · <span>{date(datetime)}</span> 
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
            {/* reply */}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionsButton}>
                    <Icon.Reply></Icon.Reply>
                </IconButton>
                <span>3</span>
            </div>
            {/* retweet */}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionsButton}>
                    <Icon.Retweet></Icon.Retweet>
                    
                </IconButton>
                <span>12</span>
            </div>
            {/* like */}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionsButton}>
                    <Icon.Like></Icon.Like>
                </IconButton>
            </div>
            {/* share */}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionsButton}>
                    <Icon.Share></Icon.Share>
                </IconButton>
            </div>
            
        </footer>
      </div>
    </article>
  )
}
export default Tweet
