import React from 'react'
import styles from './explore-search.module.css'

function ExploreSearch  (){
    
    return (
        <div className={styles.exploreSearch}>
            <div className={styles.inputDiv}>
            <input placeholder="Twitter'da Ara" className={styles.input}></input>
            </div>
           
        </div>
    )
}
export default ExploreSearch