import React from 'react'
import cn from 'classnames'
import useWindowSize from '../../hooks/useWindowSize'
import styles from '../layout/layout.module.css'

import CONST from '../../constants/index'
import Sidebar from '../col/col-sidebar'
import Main from '../col/col-main'
import Extra from '../col/col-extra'

export default function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>asdas</Sidebar>
      <Main> {children}</Main>
      {/* sizedan gelen witdh değerimiz constant klasorümüzden gelen sabitlerimizden tablet için olanından (980) büyükse extrayı göster değilse gösterme */}
      {size.width > CONST.TABLET_SIZE && <Extra></Extra>}
    </div>
  )
}
