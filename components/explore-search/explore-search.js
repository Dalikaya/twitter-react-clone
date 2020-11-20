import React,{useState,useContext} from 'react'
import styles from './explore-search.module.css'
import StoreContext from '../../store'

function ExploreSearch  (){
    const store = useContext(StoreContext)
    
    return (
        <div className={styles.exploreSearch}>
            <div className={styles.inputDiv}>
            <input  onChange={(e) => store.changeInput(e)} placeholder="Twitter'da Ara" className={styles.input}></input>
            </div>
           
        </div>
    )
}
export default ExploreSearch