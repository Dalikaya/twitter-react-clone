import React, { useEffect } from 'react'
import Photo from '../photo/photo'
import Stack from '../stack/stack'
import ThemeButton from '../theme-button/theme-button'
import IconButton from '../button/icon-button'
import * as Icon from '../icons'

import styles from './tweet-model.module.css'

function TweetModal({ onModalClose = ()=>{}, children, onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState('')

  const onSubmit = async () => {
    try {
      const response = await fetch('/api/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tweet })
      })
      const data = await response.json()
      console.log(data);

      // if (response.status !== 200){
      //    throw new Error('tweet gönderilemedi');
         
      // } 
      onModalClose();
      
    } catch (error) {
      
      throw 'tweet gönderilemedi';
      onModalClose();
      
    }
   
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}></div>
        <Photo></Photo>
        <div className={styles.body}>
          <div>
            <textarea
              onChange={(e) => tweetSet(e.target.value)}
              value={tweet}
              className={styles.textarea}
              rows="4"
              placeholder="What's happening?"
            ></textarea>
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton onClick={onClick}>
              <Icon.Close className={styles.close} />
            </IconButton>
            <ThemeButton onClick={onSubmit}>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}
export default TweetModal
