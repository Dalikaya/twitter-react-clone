import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

export default function Photo({src="https://media-exp1.licdn.com/dms/image/C4E03AQE5b3-PoJOgQA/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=7vUYjhoQ-HBMDSolGrNMpccfEAd9wwry5_pUM2Xcg5U",alt}) {
    return (
        <div className={cn(styles.photo)}>
            <img className={styles.img} src={src} alt={alt}></img>
        </div>
    )
}
