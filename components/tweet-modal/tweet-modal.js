import React, { useEffect,useContext } from 'react'
import Photo from '../photo/photo'
import Stack from '../stack/stack'
import ThemeButton from '../theme-button/theme-button'
import IconButton from '../button/icon-button'
import * as Icon from '../icons'

import styles from './tweet-model.module.css'
import StoreContext from '../../store'

function TweetModal({ onModalClose = ()=>{}, children, onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState('')

   const store = useContext(StoreContext)

  const onSubmit = async () => {
    try {
     let user =  store.GetloginUser();
      onModalClose();
      let userTweet = [];
      let allTweets = [];
      userTweet.push(tweet);
      userTweet.push(user.firstName);
      userTweet.push(new Date().toJSON().slice(0,10).replace(/-/g,'-'));
      allTweets =  localStorage.getItem('TWEET') === null ? localStorage.setItem('TWEET',JSON.stringify([userTweet])) :JSON.parse( localStorage.getItem('TWEET'))
      
      allTweets.push(userTweet);
      localStorage.setItem('TWEET',JSON.stringify(allTweets));


      store.GetAllTweets();
      
    } catch (error) {
      
      
      
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
